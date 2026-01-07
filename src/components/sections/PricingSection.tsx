import { FadeInOnScroll } from '../FadeInOnScroll';
import { CountUp } from '../CountUp';
import { RippleButton } from '../RippleButton';

interface PricingSectionProps {
  onOpenPaymentModal: (name: string, price: string, url: string) => void;
}

export function PricingSection({ onOpenPaymentModal }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Тарифы</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-[#D4B896]/80 mt-4">
              Старт обучения <strong className="text-[#D4B896]">1 февраля 2026</strong>
            </p>
          </div>
        </FadeInOnScroll>
        
        <FadeInOnScroll delay={100}>
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#D4B896]/20 to-[#C9A882]/10 rounded-2xl p-8 border border-[#D4B896]/30 max-w-4xl mx-auto text-center hover-glow transition-all">
              <p className="text-2xl text-white leading-relaxed">
                <strong className="text-[#D4B896]">Обучение в Telegram</strong>
                <br/>
                <span className="text-lg text-[#D4B896]/80 block mt-2">
                  Все материалы в закрытом Telegram-канале. Уроки открываются постепенно в течение курса.
                </span>
              </p>
            </div>
          </div>
        </FadeInOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Standard */}
          <FadeInOnScroll delay={200} direction="left">
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all hover-lift hover-glow h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Standard</h3>
                <p className="text-[#D4B896]/80 mb-4">Техника и база</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-white">
                    <CountUp end={10500} /> ₽
                  </span>
                  <span className="text-2xl text-[#D4B896]/60">/ 110 €</span>
                </div>
              </div>
              
              <p className="text-white/90 mb-6">
                Для тех, кто хочет уверенно освоить технику бенто-тортов
              </p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Доступ к урокам: 6 месяцев',
                  '9 основных уроков по объёмному декору',
                  '2 бонусных урока для выпускников',
                  'Базовые бисквиты и популярные начинки',
                  'Кремы для сборки и объёмных рисунков (классический и веган)',
                  'Гайд по заморозке',
                  'Поддержка в чате — 1 месяц',
                  'Бонус: живой эфир «Съёмка тортов и Reels для продаж»',
                  'Сертификат о прохождении курса'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="text-[#D4B896] flex-shrink-0 mt-1 group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-[#D4B896]/70 group-hover/item:text-[#D4B896]/90 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <RippleButton
                onClick={() => onOpenPaymentModal('Standard', '10 500 ₽', 'https://payform.ru/5oagZxP/')}
                className="group w-full py-4 rounded-lg bg-[#D4B896]/10 text-[#D4B896] hover:bg-[#D4B896]/20 transition-all border border-[#D4B896]/30 hover:scale-[1.02] active:scale-[0.98] transform duration-200 inline-flex items-center justify-center gap-2 font-semibold"
              >
                Выбрать Standard
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </RippleButton>
              <p className="text-[#D4B896]/60 text-sm text-center mt-3">
                🟡 Подходит, если вы хотите прокачать навык и улучшить визуал работ.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Premium */}
          <FadeInOnScroll delay={300} direction="right">
            <div className="bg-gradient-to-br from-[#D4B896]/15 to-[#C9A882]/10 rounded-2xl p-8 border-2 border-[#D4B896]/50 relative overflow-hidden hover-lift hover:shadow-2xl hover:shadow-[#D4B896]/40 h-full flex flex-col animate-border-glow">
              <div className="absolute top-4 right-4 bg-[#D4B896]/20 backdrop-blur-sm text-[#D4B896] text-xs px-3 py-1.5 rounded-full border border-[#D4B896]/40 font-medium animate-shimmer">
                🔥 Популярный
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  ⭐ Premium
                </h3>
                <p className="text-[#D4B896]/80 mb-4">Продажи и рост</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-white">
                    <CountUp end={14500} /> ₽
                  </span>
                  <span className="text-2xl text-[#D4B896]/60">/ 150 €</span>
                </div>
              </div>

              <p className="text-white/90 mb-6 font-semibold text-lg">
                Для тех, кто хочет максимум результата: заказы, рост цен и экспертность
              </p>
              
              {/* Блок Standard в рамочке */}
              <div className="border border-[#D4B896]/30 rounded-lg p-5 mb-6 bg-[#2a1f18]/30">
                <h4 className="text-[#D4B896]/80 font-semibold mb-3 text-sm">🎁 Включено всё из Standard:</h4>
                <ul className="space-y-2">
                  {[
                    'Доступ к урокам 6 месяцев',
                    '9 основных уроков по объёмному декору',
                    '2 бонусных урока для выпускников',
                    'Базовые бисквиты и популярные начинки',
                    'Кремы для сборки (веган и классик)',
                    'Гайд по заморозке',
                    'Моя личная поддержка в чате 1 месяц',
                    'Бонус: живой эфир — съёмка тортов и Reels для продаж',
                    'Сертификат о прохождении курса'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4B896]/60 flex-shrink-0 mt-0.5 text-sm">✓</span>
                      <span className="text-[#D4B896]/60 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <h4 className="text-white font-semibold mb-3">⭐ Дополнительно Premium:</h4>
                {[
                  'Доступ к урокам 12 месяцев (в 2 раза дольше, чем Standard)',
                  'Полный блок по продвижению через Reels: от идеи до монтажа',
                  'Личная консультация и разбор аккаунта в формате мастер-класса',
                  'Помощь в оформлении шапки профиля'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <span className="text-[#D4B896] flex-shrink-0 mt-1">•</span>
                    <span className="text-white group-hover/item:text-[#D4B896] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
              
              <RippleButton
                onClick={() => onOpenPaymentModal('Premium', '14 500 ₽', 'https://payform.ru/5EygUQT/')}
                className="group w-full py-4 rounded-lg bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all hover:scale-[1.02] active:scale-[0.98] transform duration-200 inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-[#D4B896]/30"
              >
                Хочу Premium — с ростом заказов
              </RippleButton>
              <p className="text-[#D4B896] text-sm text-center mt-2">
                Полный модуль Reels + 12 месяцев доступа
              </p>
              <p className="text-[#D4B896]/80 text-sm text-center mt-2">
                🔥 Лучший выбор для роста продаж
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}