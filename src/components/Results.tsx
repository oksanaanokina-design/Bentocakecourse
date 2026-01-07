import { Check } from 'lucide-react';

const results = [
  'Создавать красивые, объёмные бенто-торты, которые продаются сами',
  'Собрать и украсить торты профессионально',
  'Правильно упаковывать и фотографировать работы',
  'Использовать Reels для продвижения и увеличения заказов',
  'Вести свой кондитерский бизнес с системным подходом от А до Я'
];

export function Results() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Результат
          </h2>
          <p className="text-xl text-gray-600">После курса вы сможете:</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1766585449827-d66e82f2daed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0ZWQlMjBjYWtlJTIwY3JlYW18ZW58MXx8fHwxNzY3NDc0MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Результат обучения"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md border border-pink-100"
                >
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}