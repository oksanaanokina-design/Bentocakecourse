import { FadeInOnScroll } from '../FadeInOnScroll';

export function LearningSection() {
  return (
    <section className="py-24 bg-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Процесс</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Как проходит обучение
            </h2>
          </div>
        </FadeInOnScroll>
        
        <FadeInOnScroll delay={100}>
          <div className="bg-gradient-to-br from-[#2a1f18]/80 to-[#1a1410]/80 rounded-2xl p-8 border border-[#D4B896]/20 max-w-4xl mx-auto hover-lift hover-glow transition-all">
            <ul className="space-y-4 text-[#D4B896]/80 text-lg">
              {[
                'Закрытый Telegram-канал с видеоуроками, техкартами и гайдами',
                'Чат для общения и вопросов - моя личная поддержка в течение месяца',
                'Отдельный канал-галерея с примерами картинок и идей для ваших тортов',
                'Прямые эфиры в формате вопрос/ответ раз в неделю',
                'Все уроки структурированы: от простого к сложному',
                'Вы будете получать доступ к новым материалам в установленной последовательности',
                'Формат рассчитан на комфортное обучение и практику'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="text-[#D4B896] mt-1 text-xl group-hover:scale-125 transition-transform">✓</span>
                  <span className="group-hover:text-[#D4B896] transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}