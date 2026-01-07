import { MessageCircle, Video, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Закрытый Telegram-канал',
    description: 'С уроками, видео и гайдами'
  },
  {
    icon: Users,
    title: 'Отдельный чат',
    description: 'Для общения и вопросов'
  },
  {
    icon: BookOpen,
    title: 'Структурированные уроки',
    description: 'От простого к сложному'
  },
  {
    icon: Video,
    title: 'Постепенный доступ',
    description: 'К новым материалам в установленной последовательности'
  }
];

export function Learning() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Как проходит обучение
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
          <p className="text-lg text-gray-700">
            Формат рассчитан на комфортное обучение и практику
          </p>
        </div>
      </div>
    </section>
  );
}
