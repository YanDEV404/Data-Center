@echo off
chcp 65001 >nul
title File Server
color 0B
cd /d "%~dp0"
echo.
echo ============================================================
echo              Starting File Server
echo ============================================================
echo.
python server.py
echo.
echo Server stopped.
pause