import { FadeInOnScroll } from '../FadeInOnScroll';

export function UniqueTechniqueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1410] to-[#2a1f18] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Эксклюзив</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Авторская техника объёмных рисунков из крема
            </h2>
            <p className="text-xl text-[#D4B896]/80 mt-4 max-w-3xl mx-auto">
              Моя уникальная методика, которой больше нигде не учат
            </p>
          </div>
        </FadeInOnScroll>
        
        <div className="max-w-5xl mx-auto">
          <FadeInOnScroll delay={100}>
            <div className="bg-gradient-to-br from-[#D4B896]/20 via-[#C9A882]/15 to-[#8B7355]/10 rounded-3xl p-10 border-2 border-[#D4B896]/40 relative overflow-hidden mb-8 hover-lift hover-glow transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4B896]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative">
                <div className="mb-6 bg-[#1a1410]/70 rounded-xl p-6 border-l-4 border-[#D4B896]">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">💎</div>
                    <p className="text-lg text-[#E5C9A7] leading-relaxed italic">
                      Этот курс основан на моем опыте работы кондитером более 17 лет и собрал в себе проверенные техники, которые позволяют создавать авторские бенто-торты с объёмными рисунками и фигурками
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-[#1a1410]/50 rounded-2xl p-6 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-[#D4B896]">✓</span> Что вы освоите:
                    </h4>
                    <ul className="space-y-2 text-[#D4B896]/80">
                      {[
                        'Создание объёмных фигурок из крема с идеальной текстурой',
                        'Работа с насадками и трафаретами',
                        'Техника гладкой фигурки, эффект шерсти, вязка, плетение',
                        'Разбор рисунков и фигурок по элементам',
                        'Перенос картинки на торт с помощью проектора и специальных приложений',
                        'Работа с мастихинами для создания объёмных цветов - техника кремовой флористики',
                        'Научитесь делать несложные цветы с помощью кондитерского гвоздя'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#1a1410]/50 rounded-2xl p-6 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-[#D4B896]">⭐</span> Почему это работает:
                    </h4>
                    <ul className="space-y-2 text-[#D4B896]/80">
                      {[
                        'Основано на реальной практике, а не на теории',
                        'Подходит начинающим и опытным кондитерам',
                        'Не требует дорогого оборудования',
                        'Уроки построены по принципу «шаг за шагом», от простого к сложному',
                        'Понятная система, которая помогает получать результат',
                        'Дает понимание процесса и уверенность в своих действиях',
                        'Подходит для создания авторских премиальных бенто-тортов'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={200}>
            <div className="bg-gradient-to-r from-[#D4B896]/10 to-[#C9A882]/5 rounded-2xl p-8 border border-[#D4B896]/20 text-center hover-glow transition-all">
              <p className="text-2xl text-white leading-relaxed">
                <strong className="text-[#D4B896]">Вы получите систему</strong>, которую невозможно найти в интернете — <br/>
                это результат 17+ лет практики и довольных клиентов
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}