@echo off
chcp 65001 >nul
title  Локальный сервер Python - Bike Story

echo ========================================
echo    ЗАПУСК ЛОКАЛЬНОГО СЕРВЕРА PYTHON
echo ========================================
echo.

echo  Текущая папка:
cd

echo.
echo  Проверяем наличие Python...
python --version
if errorlevel 1 (
    echo  Python не установлен или не добавлен в PATH
    echo  Скачайте Python с: https://python.org
    pause
    exit /b 1
)

echo.
echo  Переходим в папку проекта...
cd /d "C:\Users\Student1-3\Desktop\forgot2\bike_story-5"

echo.
echo  Запускаем сервер на порту 8000...
echo.
echo ========================================
echo    СЕРВЕР ЗАПУЩЕН: http://localhost:8000
echo ========================================
echo.
echo  Карта OSM доступна по:
echo    http://localhost:8000/models/osm/index.html
echo    http://localhost:9000/buggy/index.html
echo.
echo.

python -m http.server 8000
python -m http.server 9000

pause