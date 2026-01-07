import { Users, TrendingUp, DollarSign } from 'lucide-react';

const audience = [
  {
    icon: Users,
    title: 'Новички',
    description: 'Которые хотят освоить профессиональный кондитерский поток'
  },
  {
    icon: TrendingUp,
    title: 'Кондитеры',
    description: 'Которые хотят выделяться и увеличивать продажи'
  },
  {
    icon: DollarSign,
    title: 'Амбициозные',
    description: 'Те, кто хочет получать стабильный доход от заказов, создавая уникальные бенто-торты'
  }
];

export function ForWhom() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Для кого этот курс
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audience.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <p className="text-xl">
            <strong>Решаем ключевую задачу:</strong> вы научитесь не только делать торты, но и продавать их, превращая свои навыки в доход.
          </p>
        </div>
      </div>
    </section>
  );
}
