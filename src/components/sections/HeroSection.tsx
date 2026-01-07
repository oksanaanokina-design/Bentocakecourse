import { AnimatedGradientBackground, AnimatedGradientText } from '../AnimatedGradient';
import { FadeInOnScroll } from '../FadeInOnScroll';
import { FloatingParticles } from '../FloatingParticles';
import { MagneticButton } from '../MagneticButton';

export function HeroSection() {
  return (
    <section className="relative flex items-center pt-20 py-24 overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradientBackground className="absolute inset-0" />
      
      {/* Floating Particles */}
      <FloatingParticles count={30} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeInOnScroll delay={0}>
            <div className="inline-block">
              <span className="text-[#D4B896] tracking-widest text-sm uppercase">Онлайн курс</span>
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              БЕНТО-ТОРТЫ<br/>
              <AnimatedGradientText>
                ОТ А ДО Я
              </AnimatedGradientText>
            </h1>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={200}>
            <p className="text-2xl text-white/90 mt-4">
              Объёмные рисунки и фигурки из крема
            </p>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={300}>
            <p className="text-xl text-[#D4B896]/80 max-w-2xl mx-auto">
              Создавай красивые, трендовые бенто-торты и продавай их с уверенностью — от выпечки до упаковки и продвижения через соцсети!
            </p>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <MagneticButton 
                href="#pricing" 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-8 py-4 rounded-xl hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 hover:shadow-[#D4B896]/40 hover:scale-[1.05] active:scale-[0.98] font-semibold"
              >
                Начать обучение
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </MagneticButton>
              <MagneticButton 
                href="#course" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#D4B896] text-[#D4B896] rounded-xl hover:bg-[#D4B896]/10 transition-all hover:scale-[1.05] active:scale-[0.98] font-semibold"
              >
                Подробнее
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </MagneticButton>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}