import { FadeInOnScroll } from '../FadeInOnScroll';

interface BonusLessonsSectionProps {
  bonus1Photo: string;
  bonus2Photo: string;
}

export function BonusLessonsSection({ bonus1Photo, bonus2Photo }: BonusLessonsSectionProps) {
  return (
    <section className="py-24 bg-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">для выпускников</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              + 2 Бонусных урока
            </h2>
            <p className="text-xl text-[#D4B896]/70 mt-4 max-w-3xl mx-auto">
              Эксклюзивный контент только для тех, кто выполнит все уроки и пришлёт фотографии своих работ в чат
            </p>
          </div>
        </FadeInOnScroll>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={100} direction="left">
            <div className="rounded-2xl overflow-hidden border border-[#D4B896]/20 bg-[#2a1f18] hover:border-[#D4B896]/40 transition-all hover-lift hover-glow group">
              <img 
                src={bonus1Photo} 
                alt="Винни-Пух - 10 урок курса 3D фигурки"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={200} direction="right">
            <div className="rounded-2xl overflow-hidden border border-[#D4B896]/20 bg-[#2a1f18] hover:border-[#D4B896]/40 transition-all hover-lift hover-glow group">
              <img 
                src={bonus2Photo} 
                alt="Вертикальная фигурка - урок-бонус курса 3D фигурки"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}