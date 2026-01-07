import { FadeInOnScroll } from '../FadeInOnScroll';

export function AboutSection() {
  const cards = [
    {
      emoji: '✨',
      title: 'Хочу начать печь на заказ',
      description: 'Получишь полный алгоритм от выпечки до первых продаж, упакуешь процессы и начнёшь зарабатывать на любимом деле с нуля.'
    },
    {
      emoji: '🎯',
      title: 'Уже работаю, но хочу больше заказов',
      description: 'Освоишь трендовый продукт — бенто-торты с объёмными рисунками, который продаётся сам, привлечёшь новую аудиторию через Reels и увеличишь поток.'
    },
    {
      emoji: '🚀',
      title: 'Хочу поднять чек и статус',
      description: 'Научишься делать торты премиального уровня, которые стоят дороже, упакуешь навык в экспертность и станешь востребованным мастером с очередью заказов.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">О курсе</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Для кого этот курс
            </h2>
          </div>
        </FadeInOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FadeInOnScroll key={index} delay={index * 100}>
              <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group hover-lift hover-glow h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl">{card.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-[#D4B896]/70 leading-relaxed">{card.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
