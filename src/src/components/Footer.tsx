import { Instagram, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[--color-coffee-dark] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[--color-beige] to-[--color-gold] rounded-full flex items-center justify-center">
                <span className="text-2xl">🧁</span>
              </div>
              <div>
                <div className="text-[--color-beige] text-sm">Онлайн-школа</div>
                <div className="text-white">Оксаны Анокиной</div>
              </div>
            </div>
            <p className="text-[--color-beige]/70 text-sm">
              Обучаем создавать впечатляющие бенто-торты с 2020 года
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-[--color-beige]/70 text-sm">
              <li><a href="#pricing" className="hover:text-[--color-gold] transition-colors">Тарифы</a></li>
              <li><Link to="/privacy" className="hover:text-[--color-gold] transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/oksana_anokina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[--color-beige]/70 hover:text-[--color-gold] transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @oksana_anokina
              </a>
              <a 
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-[--color-beige]/70 hover:text-[--color-gold] transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                Написать нам
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-[--color-beige]/50 text-sm">
          <p>© 2026 Онлайн-школа Оксаны Анокиной. Все права защищены.</p>
          <p className="mt-2">Сайт не предназначен для сбора PII или конфиденциальных данных</p>
        </div>
      </div>
    </footer>
  )
}