import { FadeInOnScroll } from '../FadeInOnScroll';

export function ProgramHeaderSection() {
  return (
    <section className="py-16 bg-[#2a1f18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Программа курса</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              9 основных уроков
            </h2>
            <p className="text-xl text-[#D4B896]/70 mt-4">
              Вот что вы научитесь создавать на курсе
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
