import { Instagram } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[--color-coffee-dark]/95 backdrop-blur-sm border-b border-[--color-beige]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[--color-beige] to-[--color-gold] rounded-full flex items-center justify-center">
              <span className="text-2xl">🧁</span>
            </div>
            <div>
              <div className="text-[--color-beige] font-semibold text-sm tracking-wide">Онлайн-школа</div>
              <div className="text-white text-lg">Оксаны Анокиной</div>
            </div>
          </div>
          
          <a 
            href="https://www.instagram.com/oksana_anokina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[--color-gold] to-[--color-beige] text-[--color-coffee-dark] px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">63K подписчиков</span>
            <span className="sm:hidden font-semibold">63K</span>
          </a>
        </div>
      </div>
    </header>
  )
}