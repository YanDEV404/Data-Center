# -*- coding: utf-8 -*-
"""
خادم ملفات بسيط بـ Python 3.13+
- لا يستخدم cgi (محذوف في 3.13)
- يدعم: رفع، تحميل، حذف، إعادة تسمية
"""

import os
import json
import time
import shutil
import uuid
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, unquote

# ============================================================
# الإعدادات
# ============================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, "documents")
METADATA_FILE = os.path.join(UPLOAD_DIR, "_metadata.json")
PORT = 8000

os.makedirs(UPLOAD_DIR, exist_ok=True)


# ============================================================
# دوال الميتاداتا
# ============================================================
def load_metadata():
    if os.path.exists(METADATA_FILE):
        try:
            with open(METADATA_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}


def save_metadata(data):
    with open(METADATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# ============================================================
# المعالج
# ============================================================
class FileServerHandler(SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    # ========================================================
    # GET
    # ========================================================
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # قائمة الملفات
        if path == "/files":
            meta = load_metadata()
            items = []
            for fid, info in meta.items():
                full = os.path.join(UPLOAD_DIR, fid)
                if os.path.exists(full):
                    items.append({
                        "id": fid,
                        "name": info.get("name", fid),
                        "size": os.path.getsize(full),
                        "type": info.get("type", "application/octet-stream"),
                        "createdAt": info.get("createdAt", 0),
                    })
            items.sort(key=lambda x: x["createdAt"], reverse=True)
            self._json_response(items)
            return

        # تحميل ملف
        if path.startswith("/download/"):
            fid = unquote(path[len("/download/"):])
            meta = load_metadata()
            if fid not in meta:
                self.send_error(404, "File not found")
                return
            full = os.path.join(UPLOAD_DIR, fid)
            if not os.path.exists(full):
                self.send_error(404, "File missing on disk")
                return

            info = meta[fid]
            size = os.path.getsize(full)
            ctype = info.get("type") or mimetypes.guess_type(info["name"])[0] or "application/octet-stream"

            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(size))
            # اسم التحميل: نستخدم صيغة تفهم UTF-8
            try:
                filename_utf8 = info["name"].encode("utf-8").decode("latin-1")
                cd = 'attachment; filename="%s"; filename*=UTF-8\'\'%s' % (
                    info["name"].encode("ascii", "ignore").decode() or "file",
                    info["name"].encode("utf-8").hex()
                )
                # استخدام الصيغة البسيطة لتفادي مشاكل encodings
                ascii_fallback = info["name"].encode("ascii", "ignore").decode() or "download"
                self.send_header("Content-Disposition", 'attachment; filename="%s"' % ascii_fallback)
            except Exception:
                self.send_header("Content-Disposition", 'attachment; filename="download"')

            self.end_headers()
            with open(full, "rb") as f:
                shutil.copyfileobj(f, self.wfile)
            return

        super().do_GET()

    # ========================================================
    # POST : رفع ملف
    # ========================================================
    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/upload":
            self.send_error(404, "Not found")
            return

        ctype = self.headers.get("Content-Type", "")
        if "multipart/form-data" not in ctype:
            self.send_error(400, "Expected multipart/form-data")
            return

        try:
            boundary = ctype.split("boundary=")[1].strip().strip('"').encode()
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)

            marker = b'filename="'
            idx = body.find(marker)
            if idx == -1:
                self.send_error(400, "No filename in upload")
                return
            start = idx + len(marker)
            end = body.find(b'"', start)
            original_name = body[start:end].decode("utf-8", errors="replace")
            original_name = os.path.basename(original_name).replace("/", "_").replace("\\", "_")

            header_end = body.find(b'\r\n\r\n', end)
            if header_end == -1:
                self.send_error(400, "Malformed upload")
                return
            file_start = header_end + 4

            end_marker = b'\r\n--' + boundary
            file_end = body.rfind(end_marker)
            if file_end == -1 or file_end < file_start:
                file_end = len(body)
            file_content = body[file_start:file_end]

            file_id = uuid.uuid4().hex + "_" + original_name
            target = os.path.join(UPLOAD_DIR, file_id)

            with open(target, "wb") as f:
                f.write(file_content)

            size = os.path.getsize(target)
            mime = mimetypes.guess_type(original_name)[0] or "application/octet-stream"

            meta = load_metadata()
            meta[file_id] = {
                "name": original_name,
                "type": mime,
                "createdAt": int(time.time() * 1000),
            }
            save_metadata(meta)

            print("OK uploaded: %s (%d bytes)" % (original_name, size))

            self._json_response({
                "id": file_id,
                "name": original_name,
                "size": size,
                "type": mime,
                "createdAt": meta[file_id]["createdAt"],
            })

        except Exception as e:
            print("ERROR upload:", e)
            self.send_error(500, "Upload failed: %s" % e)

    # ========================================================
    # PUT : إعادة تسمية
    # ========================================================
    def do_PUT(self):
        parsed = urlparse(self.path)
        if not parsed.path.startswith("/files/"):
            self.send_error(404, "Not found")
            return

        fid = unquote(parsed.path[len("/files/"):])
        meta = load_metadata()
        if fid not in meta:
            self.send_error(404, "File not found")
            return

        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            data = json.loads(body)
            new_name = (data.get("name") or "").strip()
        except Exception as e:
            self.send_error(400, "Invalid JSON: %s" % e)
            return

        if not new_name:
            self.send_error(400, "Name cannot be empty")
            return

        new_name = new_name.replace("/", "_").replace("\\", "_")
        new_name = os.path.basename(new_name)

        old_name = meta[fid]["name"]
        meta[fid]["name"] = new_name
        save_metadata(meta)

        print("OK renamed: %s -> %s" % (old_name, new_name))

        full = os.path.join(UPLOAD_DIR, fid)
        self._json_response({
            "id": fid,
            "name": new_name,
            "size": os.path.getsize(full) if os.path.exists(full) else 0,
            "type": meta[fid].get("type", "application/octet-stream"),
            "createdAt": meta[fid].get("createdAt", 0),
        })

    # ========================================================
    # DELETE
    # ========================================================
    def do_DELETE(self):
        parsed = urlparse(self.path)
        if not parsed.path.startswith("/files/"):
            self.send_error(404, "Not found")
            return

        fid = unquote(parsed.path[len("/files/"):])
        meta = load_metadata()
        if fid not in meta:
            self.send_error(404, "File not found")
            return

        full = os.path.join(UPLOAD_DIR, fid)
        if os.path.exists(full):
            os.remove(full)

        del meta[fid]
        save_metadata(meta)

        print("OK deleted:", fid)
        self._json_response({"ok": True})

    # ========================================================
    # مساعد
    # ========================================================
    def _json_response(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format, *args):
        pass


# ============================================================
# التشغيل
# ============================================================
if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), FileServerHandler)

    print("=" * 60)
    print("File server is running")
    print("=" * 60)
    print("Open browser at: http://localhost:%d" % PORT)
    print("Files saved in:  %s" % UPLOAD_DIR)
    print("=" * 60)
    print("Press Ctrl+C to stop")
    print("=" * 60)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")