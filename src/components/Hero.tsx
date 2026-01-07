import { ChefHat, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Старт 1 февраля</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              Бенто-торты от А до Я: объёмные рисунки и фигурки из крема
            </h1>
            
            <p className="text-xl text-gray-600">
              Создавай красивые, трендовые бенто-торты и продавай их с уверенностью — от выпечки до упаковки и продвижения через соцсети!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <ChefHat className="w-5 h-5" />
                Записаться на курс
              </a>
              <a 
                href="#content" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
              >
                Узнать подробнее
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1741429385407-b5d5b94f433f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3Njc0NzQxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Красивый бенто-торт"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}