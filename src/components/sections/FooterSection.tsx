import { Instagram, Youtube, Facebook } from 'lucide-react';
import { FadeInOnScroll } from '../FadeInOnScroll';
import { SecurityBadgeSmall } from '../SecurityBadge';

interface FooterSectionProps {
  onOpenPrivacy: () => void;
  onOpenOferta: () => void;
}

export function FooterSection({ onOpenPrivacy, onOpenOferta }: FooterSectionProps) {
  return (
    <footer className="py-16 bg-gradient-to-b from-[#1a1410] to-[#0f0c0a] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <FadeInOnScroll>
            <div className="inline-block border border-[#D4B896]/30 rounded-2xl px-8 py-4 mb-6 hover-glow transition-all">
              <p className="text-xl font-light text-[#D4B896]/90 tracking-wide">Создано с любовью для творческих людей!</p>
            </div>
          </FadeInOnScroll>
          
          {/* Social Media Icons */}
          <FadeInOnScroll delay={100}>
            <div className="flex justify-center items-center gap-4 mb-8">
              <a 
                href="https://www.instagram.com/oksana_anokina" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896]" />
              </a>
              <a 
                href="https://www.tiktok.com/@oksana_anokina" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="TikTok"
              >
                <svg className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@oksana_anokina" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="YouTube"
              >
                <Youtube className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896]" />
              </a>
              <a 
                href="https://www.threads.net/@oksana_anokina" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="Threads"
              >
                <svg className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.186 3.998a8.932 8.932 0 0 0-6.016 2.262 9.058 9.058 0 0 0-2.281 6.091h2.005c.104-3.206 2.729-5.756 5.963-5.756 3.347 0 6.065 2.761 6.065 6.152 0 3.391-2.718 6.152-6.065 6.152a5.928 5.928 0 0 1-3.81-1.384l-1.43 1.43a7.93 7.93 0 0 0 5.24 1.959c4.453 0 8.07-3.663 8.07-8.157 0-4.494-3.617-8.157-8.07-8.157-.232 0-.462.01-.69.028zm-1.003 7.755c0 1.13.916 2.047 2.046 2.047s2.046-.917 2.046-2.047c0-1.129-.916-2.046-2.046-2.046s-2.046.917-2.046 2.046z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1F7SpETANd/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896]" />
              </a>
              <a 
                href="https://vk.com/id49625006" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#2a1f18] to-[#1a1410] border border-[#D4B896]/30 rounded-xl flex items-center justify-center hover:border-[#D4B896] hover:scale-110 transition-all group"
                title="ВКонтакте"
              >
                <svg className="w-5 h-5 text-[#D4B896]/70 group-hover:text-[#D4B896] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.48h-1.75c-.54 0-.71-.43-1.68-1.41-0.85-.83-1.23-.93-1.44-.93-0.3 0-.38.08-.38.47v1.29c0 .35-.11.56-1.03.56-1.51 0-3.17-.92-4.34-2.64-1.77-2.51-2.26-4.41-2.26-4.8 0-.21.08-.41.47-.41h1.75c.35 0 .48.16.62.53.68 1.97 1.83 3.7 2.3 3.7.18 0 .26-.08.26-.54V9.42c-.06-.98-.57-1.06-.57-1.41 0-.17.14-.35.37-.35h2.75c.29 0 .4.16.4.5v3.04c0 .29.13.4.21.4.18 0 .33-.11.66-.44 1.01-1.14 1.73-2.9 1.73-2.9.09-.2.27-.41.62-.41h1.75c.42 0 .51.21.42.5-.16.74-1.89 3.27-1.89 3.27-.15.24-.21.35 0 .62.15.2.64.62 0.96 1 .6.64 1.06 1.18 1.18 1.55.12.38-.07.57-.49.57z"/>
                </svg>
              </a>
            </div>
          </FadeInOnScroll>
          
          {/* Links */}
          <FadeInOnScroll delay={200}>
            <div className="flex justify-center items-center gap-6 text-sm mb-6">
              <button 
                onClick={onOpenPrivacy}
                className="text-[#D4B896]/60 hover:text-[#D4B896] transition-colors"
              >
                Политика конфиденциальности
              </button>
              <span className="text-[#D4B896]/30">•</span>
              <button 
                onClick={onOpenOferta}
                className="text-[#D4B896]/60 hover:text-[#D4B896] transition-colors"
              >
                Договор оферты
              </button>
            </div>
          </FadeInOnScroll>
        </div>
        
        <div className="border-t border-[#D4B896]/10 pt-6">
          <FadeInOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center mb-4">
              <p className="text-[#D4B896]/50 text-sm">
                © 2026 Онлайн-школа Оксаны Анокиной. Все права защищены.
              </p>
              <p className="text-[#D4B896]/50 text-sm">
                Следите за мной на всех платформах @oksana_anokina
              </p>
            </div>
          </FadeInOnScroll>
          
          {/* Security Badge */}
          <FadeInOnScroll delay={400}>
            <div className="flex justify-center pt-4">
              <SecurityBadgeSmall />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </footer>
  );
}