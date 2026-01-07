@echo off
chcp 65001 >nul
echo.
echo 🚀 Подготовка проекта к деплою на Vercel...
echo.

REM Проверяем существование index-vite.html
if not exist "index-vite.html" (
    echo ❌ Ошибка: файл index-vite.html не найден!
    pause
    exit /b 1
)

REM Сохраняем старый index.html
if exist "index.html" (
    echo 📦 Сохраняю старый index.html...
    rename "index.html" "index-old-standalone.html"
    echo ✅ Старый файл сохранен как index-old-standalone.html
)

REM Переименовываем index-vite.html в index.html
echo 🔄 Переименовываю index-vite.html → index.html...
rename "index-vite.html" "index.html"
echo ✅ Файл переименован успешно!

echo.
echo ✅ ГОТОВО! Проект подготовлен к деплою на Vercel!
echo.
echo 📋 Следующие шаги:
echo    1. git add .
echo    2. git commit -m "Prepare for Vercel deploy"
echo    3. git push
echo    4. Импортируйте проект в Vercel
echo.
echo 🎉 Удачи!
echo.
pause
