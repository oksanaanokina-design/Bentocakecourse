#!/bin/bash

# 🚀 Скрипт подготовки проекта к деплою на Vercel

echo "🚀 Подготовка проекта к деплою на Vercel..."
echo ""

# Проверяем, существует ли index-vite.html
if [ ! -f "index-vite.html" ]; then
    echo "❌ Ошибка: файл index-vite.html не найден!"
    exit 1
fi

# Сохраняем старый index.html
if [ -f "index.html" ]; then
    echo "📦 Сохраняю старый index.html..."
    mv index.html index-old-standalone.html
    echo "✅ Старый файл сохранен как index-old-standalone.html"
fi

# Переименовываем index-vite.html в index.html
echo "🔄 Переименовываю index-vite.html → index.html..."
mv index-vite.html index.html
echo "✅ Файл переименован успешно!"

echo ""
echo "✅ ГОТОВО! Проект подготовлен к деплою на Vercel!"
echo ""
echo "📋 Следующие шаги:"
echo "   1. git add ."
echo "   2. git commit -m 'Prepare for Vercel deploy'"
echo "   3. git push"
echo "   4. Импортируйте проект в Vercel"
echo ""
echo "🎉 Удачи!"
