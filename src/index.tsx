import React from 'react';
import { ScrollToTop } from './components/ScrollToTop';
import { SecurityBadgeSmall } from './components/SecurityBadge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1410] via-[#2a1f18] to-[#1a1410]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1410]/95 backdrop-blur-md z-50 border-b border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Курсы</a>
              <a href="#about" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Об авторе</a>
              <a href="#media" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Медиа</a>
            </div>
            
            <a 
              href="https://www.instagram.com/oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border-2 border-[#D4B896] text-[#D4B896] px-10 py-4 rounded-lg hover:bg-[#D4B896]/10 transition-all text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              Подписаться в Instagram
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center pt-20 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#2a1f18] to-[#1a1410]">
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4B896" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-[#D4B896]/20 to-[#C9A882]/10 px-6 py-2 rounded-full border border-[#D4B896]/30 mb-8">
              <span className="text-[#D4B896]">Кондитерское искусство • Медиа • Бизнес</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              Онлайн-школа<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B896] via-[#E5C9A7] to-[#D4B896]">
                Оксаны Анокиной
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#D4B896]/90 mb-8 leading-relaxed">
              Превратите хобби в прибыльный бизнес
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-[#2a1f18]/50 backdrop-blur-sm rounded-xl p-6 border border-[#D4B896]/20">
                <div className="text-3xl font-bold text-white mb-1">17</div>
                <div className="text-sm text-[#D4B896]/70">лет опыта</div>
              </div>
              <div className="bg-[#2a1f18]/50 backdrop-blur-sm rounded-xl p-6 border border-[#D4B896]/20">
                <div className="text-3xl font-bold text-white mb-1">63K+</div>
                <div className="text-sm text-[#D4B896]/70">подписчиков</div>
              </div>
              <div className="bg-[#2a1f18]/50 backdrop-blur-sm rounded-xl p-6 border border-[#D4B896]/20">
                <div className="text-3xl font-bold text-white mb-1">1.1M</div>
                <div className="text-sm text-[#D4B896]/70">просмотров ролика</div>
              </div>
              <div className="bg-[#2a1f18]/50 backdrop-blur-sm rounded-xl p-6 border border-[#D4B896]/20">
                <div className="text-3xl font-bold text-white mb-1">6+</div>
                <div className="text-sm text-[#D4B896]/70">курсов</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#courses"
                className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-10 py-4 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                Смотреть курсы
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
              <a
                href="#about"
                className="group bg-transparent border-2 border-[#D4B896] text-[#D4B896] px-10 py-4 rounded-lg hover:bg-[#D4B896]/10 transition-all text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                Об авторе
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Об авторе</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Оксана Анокина
            </h2>
            <p className="text-[#D4B896]/80 mt-4 max-w-2xl mx-auto">
              Кондитер • Медиа-эксперт • Предприниматель
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    🎂
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">17+ лет в кондитерском искусстве</h3>
                    <p className="text-[#D4B896]/70">Создала более 1000 тортов. Специализируюсь на бенто-тортах, медовиках, пряниках и премиальном печенье.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    🔥
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Автор роликов-миллионников</h3>
                    <p className="text-[#D4B896]/70">Мой первый Reels набрал 1,1 млн просмотров за неделю и привлёк +45 000 целевых подписчиков.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20">
                <div className="flex items-start gap-4">
                  <a 
                    href="https://www.instagram.com/oksana_anokina" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    📱
                  </a>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Куратор у Артёма Сенаторова</h3>
                    <p className="text-[#D4B896]/70">Работала на большом курсе по Reels. Получила приз <strong className="text-[#D4B896]">MacBook</strong> за лучшие результаты 🎁</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#D4B896]/15 to-[#C9A882]/10 rounded-2xl p-8 border border-[#D4B896]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Моя миссия</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Помогаю кондитерам превратить хобби в прибыльный бизнес. Обучаю не только технике создания десертов, 
                  но и тому, как красиво показать результат и превратить его в продажи.
                </p>
                <p className="text-[#D4B896] leading-relaxed">
                  За 17+ лет я создала уникальные авторские техники, которых нет больше нигде в мире. 
                  Теперь я делюсь этими знаниями через онлайн-школу.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20">
                <h3 className="text-xl font-bold text-white mb-4">Скоро выйдет книга!</h3>
                <p className="text-[#D4B896]/70">
                  Работаю над авторской книгой с рецептами и секретами кондитерского мастерства. 
                  Подпишитесь на соцсети, чтобы не пропустить релиз! 📖
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gradient-to-b from-[#1a1410] to-[#2a1f18] border-t border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Образование</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Мои курсы и мастер-классы
            </h2>
            <p className="text-[#D4B896]/80 mt-4 max-w-2xl mx-auto">
              От кондитерского искусства до продвижения в соцсетях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Бенто-торты - ОТКРЫТ */}
            <a 
              href="/App.tsx"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-3 py-1 rounded-full text-xs font-bold">
                ОТКРЫТ 🎉
              </div>
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold text-white mb-3">Бенто-торты от А до Я</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Полный курс: бисквиты, начинки, кремы + уникальная техника объёмных рисунков из крема (аналогов в мире нет!)
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-[#D4B896]/70">
                  <span>📚</span>
                  <span>9 основных + 2 бонусных урока</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#D4B896]/70">
                  <span>⏱️</span>
                  <span>Доступ 6 месяцев</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#D4B896]/70">
                  <span>📅</span>
                  <span>Старт: 1 февраля 2026</span>
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-white">от 10 500 ₽</span>
                <span className="text-sm text-[#D4B896]/60 line-through">13 500 ₽</span>
              </div>
              <div className="mt-4 text-[#D4B896] group-hover:text-white transition-colors flex items-center gap-2">
                <span>Смотреть курс</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Вирусные Reels */}
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-3 py-1 rounded-full text-xs font-bold">
                ХИТ 🔥
              </div>
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Вирусные Reels для кондитеров</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Как создавать ролики-миллионники и привлекать целевых подписчиков. Опыт куратора у Артёма Сенаторова.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-[#D4B896]/70">
                  <span>🎬</span>
                  <span>Практикум по созданию Reels</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#D4B896]/70">
                  <span>📈</span>
                  <span>Стратегии продвижения</span>
                </div>
              </div>
              <span className="text-sm text-[#D4B896]/60">Скоро открытие продаж</span>
            </div>

            {/* Медовики */}
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
              <div className="text-5xl mb-4">🍯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Медовики: 12 вкусов</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Авторский курс по классическим и необычным медовикам с разными начинками
              </p>
              <span className="text-sm text-[#D4B896]/60">Скоро открытие продаж</span>
            </div>

            {/* Контурные рисунки */}
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Контурные рисунки на бенто-тортах</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Освойте технику рисования по бенто-тортам для создания уникальных дизайнов
              </p>
              <span className="text-sm text-[#D4B896]/60">Скоро открытие продаж</span>
            </div>

            {/* Роспись пряников */}
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
              <div className="text-5xl mb-4">🎄</div>
              <h3 className="text-2xl font-bold text-white mb-3">Роспись пряников</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Научитесь расписывать пряники и создайте свой пряничный домик
              </p>
              <span className="text-sm text-[#D4B896]/60">Скоро открытие продаж</span>
            </div>

            {/* Премиальное печенье */}
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
              <div className="text-5xl mb-4">🍪</div>
              <h3 className="text-2xl font-bold text-white mb-3">Премиальное печенье</h3>
              <p className="text-[#D4B896]/80 mb-4">
                Рецепты печенья, которые набирают миллионы просмотров в соцсетях
              </p>
              <span className="text-sm text-[#D4B896]/60">Скоро открытие продаж</span>
            </div>
          </div>

          {/* Книга */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#D4B896]/15 to-[#C9A882]/10 rounded-2xl p-8 border border-[#D4B896]/30">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📖</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Скоро выйдет моя первая книга!</h3>
                <p className="text-[#D4B896]/80 mb-4">
                  Авторские рецепты, секреты кондитерского мастерства и истории из 17+ лет практики. 
                  Подпишитесь на соцсети, чтобы не пропустить релиз!
                </p>
                <span className="text-sm text-[#D4B896]/60">В разработке • 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Медиа</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Следите за мной на всех платформах
            </h2>
            <p className="text-[#D4B896]/80 mt-4 max-w-2xl mx-auto">
              Рецепты, мастер-классы, вирусные ролики и закулисье кондитерской жизни
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <a 
              href="https://www.instagram.com/oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">Instagram</h3>
              <p className="text-[#D4B896]/60 text-sm">63K подписчиков</p>
            </a>

            <a 
              href="https://www.tiktok.com/@oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">TikTok</h3>
              <p className="text-[#D4B896]/60 text-sm">Ролики-миллионники</p>
            </a>

            <a 
              href="https://www.youtube.com/@oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">YouTube</h3>
              <p className="text-[#D4B896]/60 text-sm">Видео-рецепты</p>
            </a>

            <a 
              href="https://www.threads.net/@oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">Threads</h3>
              <p className="text-[#D4B896]/60 text-sm">Обсуждения</p>
            </a>

            <a 
              href="https://www.facebook.com/share/1F7SpETANd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">Facebook</h3>
              <p className="text-[#D4B896]/60 text-sm">Сообщество</p>
            </a>

            <a 
              href="https://vk.com/id49625006"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all text-center group"
            >
              <div className="text-5xl mb-4">🔵</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B896] transition-colors">ВКонтакте</h3>
              <p className="text-[#D4B896]/60 text-sm">Сообщество</p>
            </a>
          </div>

          <p className="text-[#D4B896]/50 text-xs mt-6 text-center max-w-2xl mx-auto">
            ⚠️ Meta признана экстремистской организацией в России и запрещена на ее территории.
          </p>

          {/* Достижение */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#D4B896]/20 via-[#C9A882]/15 to-[#D4B896]/20 rounded-2xl p-8 border-2 border-[#D4B896]/40 text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-white mb-2">Рекорд: 1,1 млн просмотров за неделю!</h3>
            <p className="text-[#D4B896]/90">
              Мой первый Reels привлёк <strong className="text-white">+45 000 целевых подписчиков</strong>. 
              Секреты создания вирусного контента — в моём будущем курсе по Reels.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#1a1410] to-[#0f0c0a] border-t border-[#D4B896]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-[#D4B896]/90 mb-8">
            Присоединяйтесь к онлайн-школе и превратите хобби в прибыльный бизнес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/App.tsx"
              className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-10 py-4 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              Записаться на курс по бенто-тортам
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://www.instagram.com/oksana_anokina"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border-2 border-[#D4B896] text-[#D4B896] px-10 py-4 rounded-lg hover:bg-[#D4B896]/10 transition-all text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              Подписаться в Instagram
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <p className="text-[#D4B896]/50 text-xs mt-6 text-center max-w-2xl mx-auto">
            ⚠️ Meta признана экстремистской организацией в России и запрещена на ее территории.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0c0a] border-t border-[#D4B896]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-lg text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>
            </div>
            <p className="text-[#D4B896]/60 mb-6">
              Кондитерское искусство • Медиа • Бизнес
            </p>
            
            <p className="text-[#D4B896]/40 text-sm mb-4">
              © 2026 Все права защищены
            </p>
            
            {/* Security Badge */}
            <div className="flex justify-center pt-2">
              <SecurityBadgeSmall />
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}