import { FadeInOnScroll } from '../FadeInOnScroll';

interface LessonCardProps {
  image: string;
  number: number;
  title: string;
  delay?: number;
}

function LessonCard({ image, number, title, delay = 0 }: LessonCardProps) {
  return (
    <FadeInOnScroll delay={delay}>
      <div className="group relative overflow-hidden rounded-2xl border-2 border-[#D4B896]/20 hover:border-[#D4B896]/50 transition-all hover-lift hover-glow">
        <div className="relative aspect-[9/16] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          {/* Number Badge */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center text-[#1a1410] font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
            {number}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}

interface GallerySectionProps {
  lessons: Array<{
    image: string;
    title: string;
  }>;
}

export function GallerySection({ lessons }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <LessonCard
              key={index}
              image={lesson.image}
              number={index + 1}
              title={lesson.title}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
}