import { motion } from 'motion/react'
import { Calendar, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden bg-gradient-to-b from-[--color-coffee-dark] to-[--color-coffee-medium]">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[--color-gold]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[--color-beige]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-[--color-gold]/20 backdrop-blur-sm rounded-full border border-[--color-gold]/30"
          >
            <span className="text-[--color-beige]">⭐ Старт 1 февраля 2026</span>
          </motion.div>
          
          <h1 className="text-white mb-6">
            Бенто-торты от А до Я:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-beige] to-[--color-gold]">
              объёмные рисунки и фигурки из крема
            </span>
          </h1>
          
          <p className="text-[--color-beige]/90 text-xl mb-10 max-w-2xl mx-auto">
            Создавайте впечатляющие бенто-торты с реалистичными фигурками. 
            Обучение в удобном формате Telegram-канала с пожизненным доступом.
          </p>
          
          <motion.a 
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[--color-gold] to-[--color-beige] text-[--color-coffee-dark] px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-[--color-gold]/50 transition-shadow"
          >
            Выбрать тариф
          </motion.a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { icon: Calendar, text: "Старт 1 февраля", color: "from-[--color-gold]" },
              { icon: Users, text: "Telegram-канал", color: "from-[--color-beige]" },
              { icon: TrendingUp, text: "11 уроков", color: "from-[--color-gold]" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${item.color} to-white/50 rounded-full flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-[--color-coffee-dark]" />
                </div>
                <p className="text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
