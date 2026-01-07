import { useState, useCallback } from 'react';
import { throttle, isActionAllowed } from './utils/spamProtection';
import authorPhoto from "figma:asset/4c817acbaec12573965cf1087a99250c742299f8.png";
import bearPhoto from "figma:asset/932c00c68091a240dd9c53df51b9ea2263cdbe33.png";
import catPhoto from "figma:asset/77faedb907678a888b9c5cece56ce7c1b7301ada.png";
import stencilPhoto from "figma:asset/58665097681cdc0b60679c91295f0fee7f445eb6.png";
import dragonPhoto from "figma:asset/9429f47671c2866d66f31e0222a6609de278b092.png";
import mermaidPhoto from "figma:asset/571bc066d33c197bb26e5ee56b3b82d5233f877e.png";
import lettersPhoto from "figma:asset/39e798f928c95fbfa0c9d6f4763a2914a26228f2.png";
import floralsPhoto from "figma:asset/0c47b18d8d2b76ea939b8129651672739bbc3d57.png";
import minionPhoto from "figma:asset/ed93f47f133207abf90d9d41fa6abde97e9686bc.png";
import magpiePhoto from "figma:asset/7881fabd0d5efe6043bb59f7c1a4b591e71a3695.png";
import bonus1Photo from "figma:asset/63854bebe066e7b2fb22773f9bf1e792faa35788.png";
import bonus2Photo from "figma:asset/154059816e1b22b34cbbfa2cddd2c9b050488508.png";
import PaymentModal from './components/PaymentModal';
import PrivacyModal from './components/PrivacyModal';
import OfertaModal from './components/OfertaModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { MagneticButton } from './components/MagneticButton';

// Import all sections
import { HeroSection } from './components/sections/HeroSection';
import { UpgradeSection } from './components/sections/UpgradeSection';
import { AboutSection } from './components/sections/AboutSection';
import { AuthorSection } from './components/sections/AuthorSection';
import { LearningSection } from './components/sections/LearningSection';
import { UniqueTechniqueSection } from './components/sections/UniqueTechniqueSection';
import { CourseContentSection } from './components/sections/CourseContentSection';
import { ProgramHeaderSection } from './components/sections/ProgramHeaderSection';
import { GallerySection } from './components/sections/GallerySection';
import { BonusLessonsSection } from './components/sections/BonusLessonsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { SpecialOfferSection } from './components/sections/SpecialOfferSection';
import { PricingSection } from './components/sections/PricingSection';
import { OtherCoursesSection } from './components/sections/OtherCoursesSection';
import { FooterSection } from './components/sections/FooterSection';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isOfertaOpen, setIsOfertaOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState<{
    name: string;
    price: string;
    url: string;
  } | null>(null);

  // Защита от спама с throttle
  const openPaymentModal = useCallback(
    throttle((name: string, price: string, url: string) => {
      // Проверка rate limit
      const check = isActionAllowed('MODAL');
      
      if (!check.allowed) {
        console.warn('[Security] Too many modal opens:', check.reason);
        return;
      }
      
      setSelectedTariff({ name, price, url });
      setIsModalOpen(true);
    }, 1000), // Минимум 1 секунда между открытиями
    []
  );

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTariff(null), 300);
  };

  // Gallery lessons data
  const galleryLessons = [
    { image: bearPhoto, title: 'Мишка' },
    { image: catPhoto, title: 'Котик' },
    { image: stencilPhoto, title: 'С трафаретом' },
    { image: dragonPhoto, title: 'Дракон' },
    { image: mermaidPhoto, title: 'Русалочка' },
    { image: lettersPhoto, title: 'С надписью' },
    { image: floralsPhoto, title: 'Цветы' },
    { image: minionPhoto, title: 'Миньон' },
    { image: magpiePhoto, title: 'Сорока' }
  ];

  return (
    <div className="min-h-screen bg-[#1a1410]">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Для кого</a>
              <a href="#author" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Об авторе</a>
              <a href="#course" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Курс</a>
              <a href="#gallery" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Галерея</a>
              <a href="#testimonials" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Отзывы</a>
              <a href="#pricing" className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors">Тарифы</a>
            </div>
            
            <MagneticButton 
              href="#pricing"
              className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all text-sm font-semibold hover:scale-[1.05] active:scale-[0.95] hover:shadow-lg hover:shadow-[#D4B896]/30 inline-flex items-center gap-2"
            >
              Забронировать
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* All Sections with Modern Effects */}
      <HeroSection />
      <UpgradeSection />
      <AboutSection />
      <AuthorSection authorPhoto={authorPhoto} />
      <LearningSection />
      <UniqueTechniqueSection />
      <CourseContentSection />
      <ProgramHeaderSection />
      <GallerySection lessons={galleryLessons} />
      <BonusLessonsSection bonus1Photo={bonus1Photo} bonus2Photo={bonus2Photo} />
      <TestimonialsSection />
      <SpecialOfferSection />
      <PricingSection onOpenPaymentModal={openPaymentModal} />
      <OtherCoursesSection />
      <FooterSection 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenOferta={() => setIsOfertaOpen(true)}
      />

      {/* Modals */}
      {selectedTariff && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          tariff={selectedTariff}
        />
      )}
      
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      
      <OfertaModal 
        isOpen={isOfertaOpen} 
        onClose={() => setIsOfertaOpen(false)} 
      />
      
      <ScrollToTop />
    </div>
  );
}
