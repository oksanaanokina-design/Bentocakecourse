import { Calendar, Users, ArrowRight } from 'lucide-react';

export function Start() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl mb-8 text-white">
          Старт обучения
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl mb-2 text-white">1 февраля</h3>
            <p className="text-pink-100">Начало курса</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl mb-2 text-white">Ограничено</h3>
            <p className="text-pink-100">Количество мест</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 inline-block">
          <p className="text-gray-900 mb-4 text-xl">
            Ссылка на участие в шапке профиля
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Записаться на курс
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
