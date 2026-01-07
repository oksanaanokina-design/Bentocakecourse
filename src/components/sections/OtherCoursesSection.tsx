import { FadeInOnScroll } from '../FadeInOnScroll';

const courses = [
  {
    emoji: '📱',
    title: 'Вирусные Reels для кондитеров',
    description: 'Как создавать ролики-миллионники и привлекать целевых подписчиков. Опыт куратора у Артёма Сенаторова.',
    badge: 'ХИТ 🔥',
    status: 'Скоро открытие продаж'
  },
  {
    emoji: '🍯',
    title: 'Медовики: 12 вкусов',
    description: 'Авторский курс по классическим и необычным медовикам с разными начинками',
    status: 'Скоро открытие продаж'
  },
  {
    emoji: '🎨',
    title: 'Контурные рисунки на бенто-тортах',
    description: 'Освойте технику рисования по бенто-тортам для создания уникальных дизайнов',
    status: 'Скоро открытие продаж'
  },
  {
    emoji: '🎄',
    title: 'Роспись пряников',
    description: 'Научитесь расписывать пряники и создайте свой пряничный домик',
    status: 'Скоро открытие продаж'
  },
  {
    emoji: '🍪',
    title: 'Премиальное печенье',
    description: 'Рецепты печенья, которые набирают миллионы просмотров в соцсетях',
    status: 'Скоро открытие продаж'
  },
  {
    emoji: '📖',
    title: 'Книга с рецептами',
    description: 'Авторская книга с уникальными рецептами и секретами кондитерского мастерства от Оксаны Анокиной',
    badge: 'В разработке 📝',
    badgeStyle: 'muted',
    status: 'Релиз в 2026 году'
  }
];

export function OtherCoursesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase block mb-6">Другие курсы</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block border-2 border-[#D4B896]/30 rounded-xl px-8 py-4">
              Вам также может понравиться
            </h2>
            <p className="text-[#D4B896]/80 mt-4 max-w-2xl mx-auto">
              Откройте для себя другие направления кондитерского искусства
            </p>
          </div>
        </FadeInOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <FadeInOnScroll key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all relative overflow-hidden hover-lift hover-glow h-full">
                {course.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    course.badgeStyle === 'muted'
                      ? 'bg-[#1a1410]/60 text-[#D4B896]/60 border border-[#D4B896]/30'
                      : 'bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410]'
                  }`}>
                    {course.badge}
                  </div>
                )}
                <div className="text-5xl mb-4">{course.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-[#D4B896]/80 mb-4">
                  {course.description}
                </p>
                <span className="text-sm text-[#D4B896]/60">{course.status}</span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}