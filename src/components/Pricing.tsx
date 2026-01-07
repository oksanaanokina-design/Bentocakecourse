import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    priceRub: '10 500 ₽',
    priceEur: '110 €',
    access: '6 месяцев',
    features: [
      'Доступ к урокам: 6 месяцев',
      'Все основные уроки + бонусный прямой эфир',
      'Личная поддержка в чате 1 месяц'
    ],
    highlighted: false
  },
  {
    name: 'Premium',
    priceRub: '14 500 ₽',
    priceEur: '150 €',
    access: '12 месяцев',
    features: [
      'Доступ к урокам: 12 месяцев',
      'Все основные уроки + бонусный прямой эфир',
      'Полный блок по продвижению через Reels',
      'Личная поддержка в чате 1 месяц',
      'Гарантия освоения навыков и увеличения продаж'
    ],
    highlighted: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Тарифы и доступ
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-pink-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-pink-300'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full inline-flex mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Популярный выбор</span>
                </div>
              )}
              
              <h3 className={`text-2xl mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-4xl ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.priceRub}
                  </span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-gray-500'}>
                    / {plan.priceEur}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-white' : 'text-pink-600'
                    }`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-pink-600 hover:bg-pink-50'
                    : 'bg-pink-600 text-white hover:bg-pink-700'
                }`}
              >
                Выбрать {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600">
          Возможна рассрочка, оплата в рублях или евро
        </p>
      </div>
    </section>
  );
}
