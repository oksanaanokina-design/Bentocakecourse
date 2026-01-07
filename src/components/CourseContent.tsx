import { Check, Gift, Star } from 'lucide-react';

const mainContent = [
  'Полные инструкции по базовым бисквитам и проверенным начинкам',
  'Два базовых крема: классический и веган для покрытия и сборки',
  'Крем для создания объёмных фигурок',
  'Сборка, пропитки и точная рецептура',
  'Авторская методика работы с объёмными рисунками и фигурками',
  'Работа с насадками, трафаретами, надписями',
  'Декор, оформление и упаковка',
  'Списки и ссылки на необходимые инструменты и материалы',
  'Гайд по заморозке для ускорения и упрощения потока заказов'
];

export function CourseContent() {
  return (
    <section id="content" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Что вас ждёт в курсе
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-pink-600" />
              </div>
              Основной контент
            </h3>
            <ul className="space-y-4">
              {mainContent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBwYXN0cnklMjBraXRjaGVufGVufDF8fHx8MTc2NzQ3NDEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Процесс приготовления"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Бонусы для всех участников</h3>
            </div>
            <p className="text-gray-700">
              Прямой эфир, где я расскажу, как красиво фотографировать бенто-торты и снимать короткие Reels для продвижения
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Бонус только для Premium</h3>
            </div>
            <p className="text-gray-700">
              Полный блок по продвижению через Reels: от идеи до монтажа, с практическими советами, как привлекать клиентов и продавать торты через соцсети
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}