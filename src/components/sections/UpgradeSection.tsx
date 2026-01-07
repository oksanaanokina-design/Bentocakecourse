import { FadeInOnScroll } from '../FadeInOnScroll';
import { CountUp } from '../CountUp';

export function UpgradeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Обновление 2026</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Апгрейд курса по бенто-тортам!
            </h2>
            <p className="text-xl text-[#D4B896]/80 mt-4 max-w-3xl mx-auto">
              Теперь это полный авторский курс от А до Я — не просто декор, а весь путь от бисквита до продаж
            </p>
          </div>
        </FadeInOnScroll>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Было в 2023 */}
          <FadeInOnScroll delay={100} direction="left">
            <div className="bg-gradient-to-br from-[#2a1f18] to-[#3d2f22] rounded-2xl p-8 border border-[#D4B896]/20 hover-lift hover:shadow-2xl hover:shadow-[#D4B896]/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4B896]/10 rounded-xl flex items-center justify-center text-2xl">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-white">Было в 2023</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]/40 mt-1">•</span>
                  <span className="text-[#D4B896]/60">Только <CountUp end={7} /> уроков по декору</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]/40 mt-1">•</span>
                  <span className="text-[#D4B896]/60">Без рецептов бисквитов и начинок</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]/40 mt-1">•</span>
                  <span className="text-[#D4B896]/60">Без личной поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]/40 mt-1">•</span>
                  <span className="text-[#D4B896]/60">Без блока по продвижению</span>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>
          
          {/* Стало в 2026 */}
          <FadeInOnScroll delay={200} direction="right">
            <div className="bg-gradient-to-br from-[#D4B896]/15 to-[#C9A882]/10 rounded-2xl p-8 border-2 border-[#D4B896]/40 relative overflow-hidden hover-lift hover:shadow-2xl hover:shadow-[#D4B896]/30 h-full">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-4 py-1 rounded-full text-sm font-bold animate-glow-pulse">
                НОВОЕ
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center text-2xl animate-float">
                  🎁
                </div>
                <h3 className="text-2xl font-bold text-white">Стало в 2026</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white"><CountUp end={9} />+2 урока по декору тортов объёмными рисунками</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">От бисквитов до продаж и продвижения в соцсетях</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Базовые бисквиты и проверенные начинки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Два крема: классика и веган + крем для объёмных фигурок</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Декор, упаковка и точная рецептура</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Гайд по заморозке для потока заказов</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Списки и ссылки на нужные инструменты</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Личная поддержка автора 1 месяц</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span className="text-white">Эфир: съёмка тортов и Reels для продаж</span>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>
        </div>
        
        <FadeInOnScroll delay={300}>
          <div className="mt-12 bg-gradient-to-r from-[#D4B896]/20 to-[#C9A882]/15 rounded-2xl p-8 border border-[#D4B896]/30 text-center max-w-4xl mx-auto hover-glow transition-all">
            <p className="text-2xl text-white leading-relaxed">
              <strong className="text-[#D4B896]">В 3 раза больше ценности</strong> — от базовых основ до первых продаж
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}