'use strict';

/* ============================================================
   🌐 الترجمات
   ============================================================ */
const TRANSLATIONS = {
    ar: {
        dir: 'rtl',
        'title': 'خادم الملفات — DataCenter',
        'brand.name': 'خادم الملفات',
        'nav.main': 'الرئيسية',
        'nav.dashboard': 'لوحة التحكم',
        'nav.all': 'كل الملفات',
        'nav.categories': 'الفئات',
        'nav.images': 'صور',
        'nav.videos': 'فيديو',
        'nav.documents': 'مستندات',
        'nav.archives': 'أرشيف',
        'sidebar.used': 'المستخدم',
        'search.placeholder': 'ابحث عن ملف...',
        'sort.newest': 'الأحدث',
        'sort.oldest': 'الأقدم',
        'sort.nameAsc': 'الاسم أ-ي',
        'sort.nameDesc': 'الاسم ي-أ',
        'sort.sizeAsc': 'الحجم ↑',
        'sort.sizeDesc': 'الحجم ↓',
        'sort.type': 'النوع',
        'btn.upload': 'رفع ملف',
        'lock.title': 'نظام محمي',
        'lock.sub': 'أدخل كلمة المرور للوصول إلى الخادم',
        'lock.btn': 'دخول',
        'lock.error': '❌ كلمة المرور غير صحيحة',
        'dash.title': 'لوحة التحكم',
        'dash.sub': 'نظرة عامة على النظام والتخزين',
        'dash.files': 'عدد الملفات',
        'dash.used': 'المساحة المستخدمة',
        'dash.remaining': 'المتبقي',
        'dash.status': 'الحالة',
        'dash.online': 'متصل ✓',
        'dash.storage': 'خادم التخزين',
        'dash.usedLabel': 'المستخدم',
        'dash.quota': 'الحصة الكاملة',
        'dash.remainingLabel': 'المتبقي',
        'dash.recent': 'آخر الملفات المرفوعة',
        'dash.noFiles': 'لا توجد ملفات بعد',
        'files.all': 'كل الملفات',
        'files.images': 'صور',
        'files.videos': 'فيديو',
        'files.documents': 'مستندات',
        'files.archives': 'أرشيف',
        'files.count': 'عنصر',
        'drop.title': 'اسحب الملفات هنا',
        'drop.sub': 'أو انقر لاختيار ملفات',
        'upload.title': 'جاري الرفع',
        'upload.progress': 'جاري الرفع...',
        'upload.saved': '✓ تم الحفظ في documents/',
        'upload.done': '✅ تم رفع',
        'upload.failed': 'فشل الرفع: ',
        'toast.connected': '✅ متصل بالخادم',
        'toast.serverError': 'لا يمكن الاتصال بالخادم. شغّل server.py أولاً.',
        'toast.downloading': 'جاري تحميل ',
        'toast.deleted': 'تم حذف الملف',
        'toast.deleteFailed': 'فشل الحذف: ',
        'toast.renamed': '✅ تمت إعادة التسمية',
        'toast.renameFailed': 'فشل إعادة التسمية: ',
        'confirm.delete': 'حذف الملف',
        'confirm.deleteQ': 'نهائياً؟',
        'preview.unsupported': 'المعاينة غير متوفرة',
        'preview.download': 'تحميل',
        'preview.close': 'إغلاق',
        'prompt.rename': 'الاسم الجديد للملف (بدون الامتداد):',
    },
    en: {
        dir: 'ltr',
        'title': 'File Server — DataCenter',
        'brand.name': 'File Server',
        'nav.main': 'Main',
        'nav.dashboard': 'Dashboard',
        'nav.all': 'All Files',
        'nav.categories': 'Categories',
        'nav.images': 'Images',
        'nav.videos': 'Videos',
        'nav.documents': 'Documents',
        'nav.archives': 'Archives',
        'sidebar.used': 'Used',
        'search.placeholder': 'Search files...',
        'sort.newest': 'Newest',
        'sort.oldest': 'Oldest',
        'sort.nameAsc': 'Name A-Z',
        'sort.nameDesc': 'Name Z-A',
        'sort.sizeAsc': 'Size ↑',
        'sort.sizeDesc': 'Size ↓',
        'sort.type': 'Type',
        'btn.upload': 'Upload',
        'lock.title': 'Protected System',
        'lock.sub': 'Enter the password to access the server',
        'lock.btn': 'Unlock',
        'lock.error': '❌ Incorrect password',
        'dash.title': 'Dashboard',
        'dash.sub': 'System overview and storage statistics',
        'dash.files': 'Total Files',
        'dash.used': 'Used Space',
        'dash.remaining': 'Remaining',
        'dash.status': 'Status',
        'dash.online': 'Online ✓',
        'dash.storage': 'Server Storage',
        'dash.usedLabel': 'Used',
        'dash.quota': 'Quota',
        'dash.remainingLabel': 'Remaining',
        'dash.recent': 'Recent Uploads',
        'dash.noFiles': 'No files yet',
        'files.all': 'All Files',
        'files.images': 'Images',
        'files.videos': 'Videos',
        'files.documents': 'Documents',
        'files.archives': 'Archives',
        'files.count': 'items',
        'drop.title': 'DROP FILES HERE',
        'drop.sub': 'or click to select files',
        'upload.title': 'Uploading',
        'upload.progress': 'Uploading...',
        'upload.saved': '✓ Saved to documents/',
        'upload.done': '✅ Uploaded',
        'upload.failed': 'Upload failed: ',
        'toast.connected': '✅ Connected to server',
        'toast.serverError': 'Cannot reach server. Start server.py first.',
        'toast.downloading': 'Downloading ',
        'toast.deleted': 'File deleted',
        'toast.deleteFailed': 'Delete failed: ',
        'toast.renamed': '✅ Renamed successfully',
        'toast.renameFailed': 'Rename failed: ',
        'confirm.delete': 'Delete file',
        'confirm.deleteQ': 'permanently?',
        'preview.unsupported': 'Preview unavailable',
        'preview.download': 'Download',
        'preview.close': 'Close',
        'prompt.rename': 'New file name (without extension):',
    },
    fr: {
        dir: 'ltr',
        'title': 'Serveur de Fichiers — DataCenter',
        'brand.name': 'Serveur de Fichiers',
        'nav.main': 'Principal',
        'nav.dashboard': 'Tableau de bord',
        'nav.all': 'Tous les fichiers',
        'nav.categories': 'Catégories',
        'nav.images': 'Images',
        'nav.videos': 'Vidéos',
        'nav.documents': 'Documents',
        'nav.archives': 'Archives',
        'sidebar.used': 'Utilisé',
        'search.placeholder': 'Rechercher des fichiers...',
        'sort.newest': 'Plus récent',
        'sort.oldest': 'Plus ancien',
        'sort.nameAsc': 'Nom A-Z',
        'sort.nameDesc': 'Nom Z-A',
        'sort.sizeAsc': 'Taille ↑',
        'sort.sizeDesc': 'Taille ↓',
        'sort.type': 'Type',
        'btn.upload': 'Téléverser',
        'lock.title': 'Système protégé',
        'lock.sub': 'Entrez le mot de passe',
        'lock.btn': 'Déverrouiller',
        'lock.error': '❌ Mot de passe incorrect',
        'dash.title': 'Tableau de bord',
        'dash.sub': 'Aperçu du système',
        'dash.files': 'Nombre de fichiers',
        'dash.used': 'Espace utilisé',
        'dash.remaining': 'Restant',
        'dash.status': 'Statut',
        'dash.online': 'En ligne ✓',
        'dash.storage': 'Stockage du serveur',
        'dash.usedLabel': 'Utilisé',
        'dash.quota': 'Quota',
        'dash.remainingLabel': 'Restant',
        'dash.recent': 'Téléversements récents',
        'dash.noFiles': 'Aucun fichier',
        'files.all': 'Tous les fichiers',
        'files.images': 'Images',
        'files.videos': 'Vidéos',
        'files.documents': 'Documents',
        'files.archives': 'Archives',
        'files.count': 'éléments',
        'drop.title': 'DÉPOSEZ LES FICHIERS ICI',
        'drop.sub': 'ou cliquez pour sélectionner',
        'upload.title': 'Téléversement',
        'upload.progress': 'Téléversement...',
        'upload.saved': '✓ Enregistré dans documents/',
        'upload.done': '✅ Téléversé',
        'upload.failed': 'Échec : ',
        'toast.connected': '✅ Connecté au serveur',
        'toast.serverError': 'Impossible de joindre le serveur.',
        'toast.downloading': 'Téléchargement de ',
        'toast.deleted': 'Fichier supprimé',
        'toast.deleteFailed': 'Échec : ',
        'toast.renamed': '✅ Renommé',
        'toast.renameFailed': 'Échec du renommage : ',
        'confirm.delete': 'Supprimer',
        'confirm.deleteQ': 'définitivement ?',
        'preview.unsupported': 'Aperçu indisponible',
        'preview.download': 'Télécharger',
        'preview.close': 'Fermer',
        'prompt.rename': 'Nouveau nom (sans extension) :',
    },
};

let currentLang = 'ar';

function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;
}

function applyTranslations() {
    const tr = TRANSLATIONS[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = tr.dir;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tr[key] !== undefined) el.textContent = tr[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (tr[key] !== undefined) el.setAttribute('placeholder', tr[key]);
    });

    document.title = tr['title'];

    if (typeof state !== 'undefined' && state.files) {
        if (state.currentView === 'dashboard') renderRecent();
        else renderFiles();
        updateStatsUI();
    }
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'ar';
    currentLang = lang;
    try { localStorage.setItem('dc-lang', lang); } catch (_) {}
    const sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
    applyTranslations();
}

/* ============================================================
   🔒 شاشة القفل
   ============================================================ */
const PASSWORD = '1975';

(function initLockScreen() {
    const lock = document.getElementById('lockScreen');
    const input = document.getElementById('lockInput');
    const btn = document.getElementById('lockBtn');
    const err = document.getElementById('lockError');

    if (!lock) return;

    if (sessionStorage.getItem('dc-unlocked') === '1') {
        lock.classList.add('hidden-lock');
        setTimeout(() => lock.remove(), 600);
        return;
    }

    function tryUnlock() {
        const val = (input.value || '').trim();
        if (val === PASSWORD) {
            sessionStorage.setItem('dc-unlocked', '1');
            lock.classList.add('hidden-lock');
            setTimeout(() => lock.remove(), 600);
            if (navigator.vibrate) navigator.vibrate(30);
        } else {
            err.textContent = t('lock.error');
            err.classList.add('show');
            input.value = '';
            input.focus();
            const box = lock.querySelector('.lock-box');
            box.classList.add('shake');
            setTimeout(() => box.classList.remove('shake'), 500);
            if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
        }
    }

    btn.onclick = tryUnlock;
    input.onkeydown = (e) => {
        if (e.key === 'Enter') tryUnlock();
        err.classList.remove('show');
    };
    setTimeout(() => input.focus(), 200);
})();

/* ============================================================
   الإعدادات
   ============================================================ */
const STORAGE_QUOTA = 1 * 1024 * 1024 * 1024;

const state = {
    files: [],
    currentView: 'dashboard',
    viewMode: 'grid',
    sortBy: 'newest',
    searchQuery: '',
    theme: 'dark',
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ============================================================
   أدوات مساعدة
   ============================================================ */
function formatBytes(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 2) + ' ' + sizes[i];
}

function formatDate(ts) {
    const diff = Date.now() - ts;
    const locale = currentLang === 'ar' ? 'ar-EG' : (currentLang === 'fr' ? 'fr-FR' : 'en-US');
    if (diff < 60000) return currentLang === 'ar' ? 'الآن' : (currentLang === 'fr' ? "à l'instant" : 'just now');
    if (diff < 3600000) {
        const m = Math.floor(diff / 60000);
        return currentLang === 'ar' ? m + ' دقيقة' : (currentLang === 'fr' ? m + ' min' : m + 'm');
    }
    if (diff < 86400000) {
        const h = Math.floor(diff / 3600000);
        return currentLang === 'ar' ? h + ' ساعة' : (currentLang === 'fr' ? h + ' h' : h + 'h');
    }
    if (diff < 604800000) {
        const d = Math.floor(diff / 86400000);
        return currentLang === 'ar' ? d + ' يوم' : (currentLang === 'fr' ? d + ' j' : d + 'd');
    }
    return new Date(ts).toLocaleDateString(locale);
}

function getExtension(name) {
    const i = name.lastIndexOf('.');
    return i > 0 ? name.slice(i + 1).toLowerCase() : '';
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function toast(msg, type = 'info', duration = 3500) {
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => {
        el.style.transition = 'all .3s';
        el.style.opacity = '0';
        el.style.transform = 'translateX(-20px)';
        setTimeout(() => el.remove(), 320);
    }, duration);
}

/* ============================================================
   الفئات
   ============================================================ */
const FILE_CATEGORIES = {
    image:      ['png','jpg','jpeg','gif','webp','svg','bmp','ico','avif'],
    video:      ['mp4','webm','mkv','mov','avi','m4v','ogv'],
    audio:      ['mp3','wav','ogg','flac','m4a','aac','opus'],
    document:   ['pdf','doc','docx','txt','md','rtf','odt','xls','xlsx','ppt','pptx','csv','json','xml','html','css','js','ts'],
    archive:    ['zip','rar','7z','tar','gz','bz2','xz'],
    executable: ['exe','msi','app','dmg','deb','rpm','jar','apk'],
    minecraft:  ['mcworld','mcstructure','mcpack','mcaddon','mctemplate'],
};

const CODE_EXTS = ['js','ts','html','css','json','py','java','cpp','c','php','xml','yml','yaml'];

function getCategory(ext) {
    ext = (ext || '').toLowerCase();
    for (const [cat, list] of Object.entries(FILE_CATEGORIES)) {
        if (list.includes(ext)) return cat;
    }
    return 'other';
}

/* ============================================================
   🎨 الأيقونات
   ============================================================ */
const ICONS = {
    image:      `<img src="icons/image.png" alt="image">`,
    video:      `<img src="icons/video.png" alt="video">`,
    audio:      `<img src="icons/video.png" alt="audio">`,
    document:   `<img src="icons/document.png" alt="document">`,
    archive:    `<img src="icons/archive.png" alt="archive">`,
    executable: `<img src="icons/document.png" alt="app">`,
    minecraft:  `<img src="icons/archive.png" alt="minecraft">`,
    code:       `<img src="icons/document.png" alt="code">`,
    pdf:        `<img src="icons/document.png" alt="pdf">`,
    other:      `<img src="icons/document.png" alt="file">`,
};

const ACTION_ICONS = {
    preview:  `<img src="icons/preview.png" alt="preview">`,
    download: `<img src="icons/download.png" alt="download">`,
    rename:   `<img src="icons/document.png" alt="rename">`,
    delete:   `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
};

function getIcon(ext) {
    ext = (ext || '').toLowerCase();
    if (ext === 'pdf') return ICONS.pdf;
    if (CODE_EXTS.includes(ext)) return ICONS.code;
    return ICONS[getCategory(ext)] || ICONS.other;
}

/* ============================================================
   إحصائيات
   ============================================================ */
function computeStats() {
    const totalSize = state.files.reduce((s, f) => s + (f.size || 0), 0);
    return {
        totalFiles: state.files.length,
        totalSize,
        remaining: Math.max(0, STORAGE_QUOTA - totalSize),
        usagePct: Math.min(100, (totalSize / STORAGE_QUOTA) * 100),
    };
}

function updateStatsUI() {
    const s = computeStats();
    $('#statFiles').textContent = s.totalFiles;
    $('#statUsed').textContent = formatBytes(s.totalSize);
    $('#statRemaining').textContent = formatBytes(s.remaining);
    $('#usagePct').textContent = s.usagePct.toFixed(1) + '%';
    $('#dashUsed').textContent = formatBytes(s.totalSize);
    $('#dashRemaining').textContent = formatBytes(s.remaining);
    $('#dashBar').style.width = s.usagePct + '%';
    $('#miniBar').style.width = s.usagePct + '%';
    $('#miniUsed').textContent = formatBytes(s.totalSize);
}

/* ============================================================
   عرض لوحة التحكم
   ============================================================ */
function renderRecent() {
    const box = $('#recentList');
    const recent = state.files.slice(0, 6);

    if (!recent.length) {
        box.innerHTML = `<div class="empty" style="padding:30px"><div class="empty-icon">▤</div>${t('dash.noFiles')}</div>`;
        return;
    }

    box.innerHTML = recent.map(f => {
        const ext = getExtension(f.name);
        return `
        <div class="recent-item">
            <div class="file-icon" style="width:38px;height:38px">${getIcon(ext)}</div>
            <div style="flex:1;min-width:0">
                <div style="font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(f.name)}</div>
                <div style="color:var(--text-dim);font-size:11.5px;margin-top:2px">${formatBytes(f.size)} · ${formatDate(f.createdAt)}</div>
            </div>
        </div>`;
    }).join('');
}

/* ============================================================
   عرض الملفات
   ============================================================ */
function getVisibleFiles() {
    const q = state.searchQuery.toLowerCase().trim();
    let files = state.files.filter(f => {
        if (state.currentView === 'images')    return getCategory(getExtension(f.name)) === 'image';
        if (state.currentView === 'videos')    return getCategory(getExtension(f.name)) === 'video';
        if (state.currentView === 'documents') return getCategory(getExtension(f.name)) === 'document';
        if (state.currentView === 'archives')  return getCategory(getExtension(f.name)) === 'archive';
        return true;
    });

    if (q) {
        files = files.filter(f => (f.name + ' ' + (f.type || '')).toLowerCase().includes(q));
    }

    const s = state.sortBy;
    files.sort((a, b) => {
        switch (s) {
            case 'newest':    return b.createdAt - a.createdAt;
            case 'oldest':    return a.createdAt - b.createdAt;
            case 'name-asc':  return a.name.localeCompare(b.name, currentLang);
            case 'name-desc': return b.name.localeCompare(a.name, currentLang);
            case 'size-asc':  return a.size - b.size;
            case 'size-desc': return b.size - a.size;
            case 'type':      return getExtension(a.name).localeCompare(getExtension(b.name));
            default:          return 0;
        }
    });
    return files;
}

function renderFiles() {
    const files = getVisibleFiles();
    $('#filesCount').textContent = files.length + ' ' + t('files.count');

    const dz = $('#dropzone');
    dz.style.display = files.length === 0 ? 'block' : 'none';

    const grid = $('#fileGrid');
    grid.className = 'file-grid' + (state.viewMode === 'list' ? ' list' : '');

    if (!files.length) {
        grid.innerHTML = '';
        return;
    }

    grid.innerHTML = files.map(f => {
        const ext = getExtension(f.name);
        return `
        <div class="file-card" data-id="${f.id}">
            <div class="file-top">
                <div class="file-icon">${getIcon(ext)}</div>
                <div style="min-width:0;flex:1">
                    <div class="file-name" title="${escapeHtml(f.name)}">${escapeHtml(f.name)}</div>
                    <div class="file-meta">
                        ${ext ? `<span class="file-ext">${escapeHtml(ext)}</span>` : ''}
                        <span>${formatBytes(f.size)}</span>
                        <span>·</span>
                        <span>${formatDate(f.createdAt)}</span>
                    </div>
                </div>
            </div>
            <div class="file-actions">
                <button class="icon-btn" data-action="preview" title="Preview">${ACTION_ICONS.preview}</button>
                <button class="icon-btn" data-action="download" title="Download">${ACTION_ICONS.download}</button>
                <button class="icon-btn" data-action="rename" title="Rename">${ACTION_ICONS.rename}</button>
                <button class="icon-btn" data-action="delete" title="Delete">${ACTION_ICONS.delete}</button>
            </div>
        </div>`;
    }).join('');

    $$('#fileGrid .file-card').forEach(card => {
        const id = card.dataset.id;
        card.querySelectorAll('[data-action]').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const file = state.files.find(x => x.id === id);
                if (!file) return;
                const act = btn.dataset.action;
                if (act === 'preview') openPreview(file);
                else if (act === 'download') downloadFile(file);
                else if (act === 'rename') promptRename(file);
                else if (act === 'delete') deleteFile(file);
            };
        });
    });
}

/* ============================================================
   معاينة
   ============================================================ */
function openPreview(file) {
    const ext = getExtension(file.name);
    const cat = getCategory(ext);
    const url = '/download/' + encodeURIComponent(file.id);

    let bodyHtml = '';

    if (cat === 'image') {
        bodyHtml = `
            <div style="text-align:center">
                <img src="${url}" alt="${escapeHtml(file.name)}"
                     style="max-width:100%;max-height:70vh;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,0.5)">
            </div>`;
    } else if (cat === 'video') {
        bodyHtml = `
            <div style="text-align:center">
                <video src="${url}" controls autoplay
                       style="max-width:100%;max-height:70vh;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,0.5)">
                </video>
            </div>`;
    } else if (cat === 'audio') {
        bodyHtml = `
            <div style="padding:30px;text-align:center">
                <div style="font-size:60px;margin-bottom:20px">🎵</div>
                <audio src="${url}" controls autoplay style="width:100%"></audio>
            </div>`;
    } else if (ext === 'pdf') {
        bodyHtml = `<iframe src="${url}" style="width:100%;height:70vh;border:none;border-radius:12px;background:#fff"></iframe>`;
    } else {
        bodyHtml = `
            <div style="text-align:center;padding:40px 20px">
                <div class="file-icon" style="margin:0 auto 20px;width:80px;height:80px">${getIcon(ext)}</div>
                <div style="font-size:16px;font-weight:600;margin-bottom:8px">${t('preview.unsupported')}</div>
                <div style="color:var(--text-dim);font-size:13px">
                    ${escapeHtml(file.name)}<br>
                    ${formatBytes(file.size)}
                </div>
            </div>`;
    }

    const backdrop = document.createElement('div');
    backdrop.className = 'preview-backdrop';
    backdrop.innerHTML = `
        <div class="preview-box">
            <div class="preview-header">
                <div class="preview-title">${escapeHtml(file.name)}</div>
                <div style="display:flex;gap:8px">
                    <a href="${url}" download="${escapeHtml(file.name)}"
                       class="icon-btn" title="${t('preview.download')}">${ACTION_ICONS.download}</a>
                    <button class="icon-btn" id="previewClose" title="${t('preview.close')}">${ACTION_ICONS.delete}</button>
                </div>
            </div>
            <div class="preview-body">${bodyHtml}</div>
        </div>`;
    document.body.appendChild(backdrop);

    const close = () => {
        backdrop.style.opacity = '0';
        setTimeout(() => backdrop.remove(), 200);
    };
    backdrop.querySelector('#previewClose').onclick = close;
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
}

/* ============================================================
   الخادم
   ============================================================ */
async function refreshFromServer() {
    try {
        const res = await fetch('/files');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const files = await res.json();

        state.files = files.map(f => ({
            id: f.id,
            name: f.name,
            size: f.size,
            type: f.type,
            createdAt: f.createdAt,
        }));

        refreshAll();
    } catch (err) {
        console.error('refreshFromServer:', err);
        toast(t('toast.serverError'), 'error', 6000);
    }
}

function downloadFile(file) {
    const url = '/download/' + encodeURIComponent(file.id);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast(t('toast.downloading') + file.name, 'success');
}

async function deleteFile(file) {
    if (!confirm(t('confirm.delete') + ' "' + file.name + '" ' + t('confirm.deleteQ'))) return;
    try {
        const res = await fetch('/files/' + encodeURIComponent(file.id), { method: 'DELETE' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        state.files = state.files.filter(f => f.id !== file.id);
        refreshAll();
        toast(t('toast.deleted'), 'success');
    } catch (err) {
        toast(t('toast.deleteFailed') + err.message, 'error');
    }
}

async function promptRename(file) {
    const ext = getExtension(file.name);
    const baseName = ext ? file.name.slice(0, -(ext.length + 1)) : file.name;

    const newBase = prompt(t('prompt.rename'), baseName);
    if (!newBase || !newBase.trim()) return;

    let newName = newBase.trim();
    if (ext && !newName.toLowerCase().endsWith('.' + ext)) {
        newName = newName + '.' + ext;
    }

    if (newName === file.name) return;

    try {
        const res = await fetch('/files/' + encodeURIComponent(file.id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
        });

        if (!res.ok) throw new Error('HTTP ' + res.status);

        const updated = await res.json();

        const idx = state.files.findIndex(f => f.id === file.id);
        if (idx !== -1) {
            state.files[idx].name = updated.name;
        }

        refreshAll();
        toast(t('toast.renamed'), 'success');

    } catch (err) {
        console.error(err);
        toast(t('toast.renameFailed') + err.message, 'error', 5000);
    }
}

/* ============================================================
   الرفع
   ============================================================ */
const uploadQueue = [];
let processing = false;

function addToUploadQueue(files) {
    if (!files || !files.length) return;
    files.forEach(f => uploadQueue.push(f));
    showUploadPanel();
    updateUploadSummary();
    processQueue();
}

function showUploadPanel() { $('#uploadPanel').classList.add('show'); }
function hideUploadPanel() { $('#uploadPanel').classList.remove('show'); }

async function processQueue() {
    if (processing) return;
    processing = true;
    while (uploadQueue.length) {
        const f = uploadQueue.shift();
        await handleSingleUpload(f);
    }
    processing = false;
}

async function handleSingleUpload(file) {
    const itemId = 'u-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);

    const item = document.createElement('div');
    item.className = 'upload-item';
    item.id = itemId;
    item.innerHTML = `
        <div class="upload-item-name">
            <span>${escapeHtml(file.name)}</span>
            <span>${formatBytes(file.size)}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>
        <div class="upload-item-status">${t('upload.progress')}</div>`;
    $('#uploadList').prepend(item);
    updateUploadSummary();

    const bar = item.querySelector('.progress-fill');
    const status = item.querySelector('.upload-item-status');

    try {
        const fd = new FormData();
        fd.append('file', file);

        const result = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload');

            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const pct = (e.loaded / e.total) * 100;
                    bar.style.width = pct + '%';
                    status.textContent = `${t('upload.progress')} ${pct.toFixed(0)}%`;
                }
            };

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try { resolve(JSON.parse(xhr.responseText)); }
                    catch (e) { reject(new Error('Bad response')); }
                } else {
                    reject(new Error('HTTP ' + xhr.status));
                }
            };
            xhr.onerror = () => reject(new Error('Connection failed'));
            xhr.send(fd);
        });

        bar.style.width = '100%';
        item.classList.add('done');
        status.textContent = t('upload.saved');
        toast(t('upload.done') + ' ' + result.name, 'success');

        await refreshFromServer();

    } catch (err) {
        console.error(err);
        item.classList.add('error');
        status.textContent = '✕ ' + err.message;
        toast(t('upload.failed') + err.message, 'error', 6000);
    }

    updateUploadSummary();
}

function updateUploadSummary() {
    const total = $$('#uploadList .upload-item').length;
    const done = $$('#uploadList .upload-item.done').length;
    $('#uploadSub').textContent = `${done} / ${total}`;
}

/* ============================================================
   السحب والإفلات
   ============================================================ */
function setupDragDrop() {
    const dz = $('#dropzone');
    const content = $('#content');

    ['dragenter', 'dragover'].forEach(ev => {
        content.addEventListener(ev, (e) => {
            e.preventDefault();
            if (ev === 'dragover') dz.classList.add('dragover');
        });
    });
    content.addEventListener('dragleave', (e) => {
        e.preventDefault();
        if (e.target === content) dz.classList.remove('dragover');
    });
    content.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        if (files.length) addToUploadQueue(files);
    });

    dz.onclick = () => $('#fileInput').click();
}

/* ============================================================
   التنقل
   ============================================================ */
function switchView(view) {
    state.currentView = view;
    $$('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));

    ['dashboard', 'files'].forEach(v => {
        const el = $('#view-' + v);
        if (el) el.classList.add('hidden');
    });

    if (view === 'dashboard') {
        $('#view-dashboard').classList.remove('hidden');
        renderRecent();
    } else {
        $('#view-files').classList.remove('hidden');
        const titles = {
            all: t('files.all'), images: t('files.images'),
            videos: t('files.videos'), documents: t('files.documents'),
            archives: t('files.archives'),
        };
        $('#filesTitle').textContent = titles[view] || t('files.all');
        renderFiles();
    }
}

function refreshAll() {
    updateStatsUI();
    if (state.currentView === 'dashboard') renderRecent();
    else renderFiles();
}

/* ============================================================
   الأحداث
   ============================================================ */
$$('.nav-item').forEach(el => {
    el.onclick = () => {
        switchView(el.dataset.view);
        $('#sidebar').classList.remove('open');
        $('#sidebarOverlay').classList.remove('show');
    };
});

$('#fileInput').addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length) addToUploadQueue(files);
    e.target.value = '';
});

$('#uploadBtn').onclick = () => $('#fileInput').click();
$('#uploadClose').onclick = hideUploadPanel;

$('#sortSelect').onchange = (e) => {
    state.sortBy = e.target.value;
    renderFiles();
};

$('#viewToggle').onclick = () => {
    state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    renderFiles();
};

$('#themeToggle').onclick = () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    $('#themeToggle').textContent = state.theme === 'dark' ? '🌙' : '☀️';
    try { localStorage.setItem('dc-theme', state.theme); } catch (_) {}
};

$('#langSelect').onchange = (e) => {
    setLanguage(e.target.value);
};

$('#searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.currentView === 'dashboard') switchView('all');
    else renderFiles();
});

$('#menuBtn').onclick = () => {
    $('#sidebar').classList.toggle('open');
    $('#sidebarOverlay').classList.toggle('show');
};
$('#sidebarOverlay').onclick = () => {
    $('#sidebar').classList.remove('open');
    $('#sidebarOverlay').classList.remove('show');
};

/* ============================================================
   التشغيل
   ============================================================ */
async function init() {
    let savedLang = 'ar';
    try { savedLang = localStorage.getItem('dc-lang') || 'ar'; } catch (_) {}
    if (!TRANSLATIONS[savedLang]) savedLang = 'ar';
    currentLang = savedLang;
    const sel = document.getElementById('langSelect');
    if (sel) sel.value = savedLang;
    applyTranslations();

    try {
        const saved = localStorage.getItem('dc-theme');
        if (saved === 'light') {
            state.theme = 'light';
            document.documentElement.setAttribute('data-theme', 'light');
            $('#themeToggle').textContent = '☀️';
        }
    } catch (_) {}

    setupDragDrop();
    await refreshFromServer();
    switchView('dashboard');
    toast(t('toast.connected'), 'success', 2500);
}

init();