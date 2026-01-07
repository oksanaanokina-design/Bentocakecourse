import { motion } from 'motion/react'
import { useInView } from '../hooks/useInView'
import { CheckCircle2, Gift } from 'lucide-react'

const lessons = [
  "Основы работы с кремом: текстуры и консистенции",
  "Базовые техники создания объёмных элементов",
  "Рисование животных из крема: мишки, зайчики, котики",
  "Создание цветочных композиций",
  "Техника градиента и омбре",
  "Персонажи из мультфильмов и аниме",
  "Реалистичные фрукты и ягоды",
  "Надписи и леттеринг на бенто-тортах",
  "Упаковка и презентация готового изделия"
]

const bonusLessons = [
  "Секреты ценообразования и продвижения в Instagram",
  "Как получать заказы на 50 000+ рублей в месяц"
]

export default function Lessons() {
  const [ref, isInView] = useInView()
  
  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[--color-coffee-medium] to-[--color-coffee-dark]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Программа курса</h2>
          <p className="text-[--color-beige]/90 max-w-2xl mx-auto">
            9 основных уроков + 2 бонусных урока только для выпускников
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">📚</span>
              Основная программа
            </h3>
            <div className="space-y-4">
              {lessons.map((lesson, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <span className="text-[--color-beige]">{lesson}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[--color-gold]/20 to-[--color-beige]/20 backdrop-blur-md border border-[--color-gold]/30 rounded-3xl p-8"
          >
            <h3 className="text-white mb-6 flex items-center gap-2">
              <Gift className="w-8 h-8 text-[--color-gold]" />
              Бонусные уроки для выпускников
            </h3>
            <div className="space-y-4 mb-8">
              {bonusLessons.map((lesson, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <span className="text-white">{lesson}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <p className="text-[--color-beige] text-sm">
                💡 <strong className="text-white">Пожизненный доступ</strong> ко всем материалам курса и обновлениям
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
