import { FadeInOnScroll } from '../FadeInOnScroll';

export function CourseContentSection() {
  const mainContent = [
    'Полные инструкции по базовым бисквитам и проверенным начинкам',
    'Два базовых крема: классический и веган для покрытия и сборки',
    'Крем для создания объёмных фигурок',
    'Сборка, пропитки и точная рецептура',
    'Авторская методика работы с объёмными рисунками и фигурками',
    'Работа с насадками, трафаретами, надписями',
    'Декор, оформление и упаковка',
    'Списки и ссылки на необходимые инструменты',
    'Гайд по заморозке бенто-тортов и начинок'
  ];

  const results = [
    'Создавать красивые объёмные рисунки на бенто-тортах',
    'Собрать и украсить торты профессионально',
    'Правильно упаковывать и фотографировать работы',
    'Использовать Reels для продвижения и увеличения заказов',
    'Вести свой кондитерский бизнес с системным подходом от А до Я'
  ];

  return (
    <section id="course" className="py-24 bg-gradient-to-b from-[#1a1410] to-[#2a1f18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Программа</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Что вас ждёт в курсе
            </h2>
          </div>
        </FadeInOnScroll>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeInOnScroll delay={100} direction="left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-lg flex items-center justify-center text-xl">
                  ✓
                </span>
                Основной контент
              </h3>
              <div className="space-y-4">
                {mainContent.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className="text-[#D4B896] flex-shrink-0 mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-[#D4B896]/70 group-hover:text-[#D4B896]/90 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={200} direction="right">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-lg flex items-center justify-center text-xl">
                  ✓
                </span>
                Результат
              </h3>
              <p className="text-[#D4B896]/90 mb-6 text-lg">После курса вы сможете:</p>
              <div className="space-y-4">
                {results.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className="text-[#D4B896] flex-shrink-0 mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-[#D4B896]/70 group-hover:text-[#D4B896]/90 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <FadeInOnScroll delay={300}>
            <div className="bg-gradient-to-br from-[#D4B896]/10 to-[#C9A882]/5 rounded-2xl p-8 border border-[#D4B896]/20 hover-lift hover-glow transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center text-2xl">
                  🎁
                </div>
                <h4 className="text-2xl font-bold text-white">Бонусы для всех</h4>
              </div>
              <p className="text-[#D4B896]/70 leading-relaxed">
                Прямой эфир о красивой съёмке бенто-тортов и создании Reels для продвижения
              </p>
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={400}>
            <div className="bg-gradient-to-br from-[#C9A882]/10 to-[#D4B896]/5 rounded-2xl p-8 border border-[#D4B896]/20 hover-lift hover-glow transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A882] to-[#D4B896] rounded-xl flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <h4 className="text-2xl font-bold text-white">Premium бонус</h4>
              </div>
              <p className="text-[#D4B896]/70 leading-relaxed">
                Полный блок по продвижению через Reels: от идеи до монтажа и привлечения клиентов
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}