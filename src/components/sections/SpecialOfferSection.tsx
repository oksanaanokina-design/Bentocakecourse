import { FadeInOnScroll } from '../FadeInOnScroll';
import { CountUp } from '../CountUp';

export function SpecialOfferSection() {
  const stats = [
    { number: 9, label: 'основных уроков' },
    { number: 2, label: 'бонусных урока' },
    { text: '1 февраля', label: 'старт потока' },
    { number: 2026, label: 'новая версия' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#D4B896]/20 via-[#C9A882]/15 to-[#D4B896]/20 border-y border-[#D4B896]/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 animate-pulse-slow" 
           style={{
             backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4B896" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
           }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInOnScroll>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-6 py-2 rounded-full mb-6 font-bold animate-shimmer" style={{
              backgroundSize: '200% 100%',
              backgroundImage: 'linear-gradient(90deg, #D4B896 0%, #E5C9A7 50%, #D4B896 100%)'
            }}>
              💎 ВЕРСИЯ 2026 — ПРЕМИУМ ОБНОВЛЕНИЕ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Первый поток обновлённого курса
            </h2>
            <p className="text-xl text-[#D4B896]/90 mb-8 max-w-3xl mx-auto">
              Полностью переработанная программа с трендами и техниками нового года
            </p>
          </div>
        </FadeInOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <FadeInOnScroll key={index} delay={index * 100}>
              <div className="bg-[#2a1f18]/50 backdrop-blur-sm rounded-xl p-6 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all hover-lift hover-glow">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number ? <CountUp end={stat.number} /> : stat.text}
                </div>
                <div className="text-sm text-[#D4B896]/70">{stat.label}</div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
        
        <FadeInOnScroll delay={400}>
          <p className="text-[#D4B896]/90 text-lg mt-8 text-center">
            🔥 Закрепите цену сейчас — после старта стоимость увеличится
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
