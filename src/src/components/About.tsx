import { motion } from 'motion/react'
import { useInView } from '../hooks/useInView'
import { Sparkles, Award, Heart } from 'lucide-react'

export default function About() {
  const [ref, isInView] = useInView()
  
  return (
    <section ref={ref} className="py-20 px-4 bg-[--color-cream]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[--color-coffee-dark] mb-4">
            Превратите хобби в <span className="text-[--color-gold]">прибыльный навык</span>
          </h2>
          <p className="text-[--color-coffee-medium] max-w-2xl mx-auto">
            Научитесь создавать трендовые бенто-торты, которые покоряют Instagram и приносят стабильный доход
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Современные техники",
              description: "Актуальные тренды 2025-2026 года в оформлении и дизайне бенто-тортов"
            },
            {
              icon: Award,
              title: "Профессиональный подход",
              description: "63 000 подписчиков доверяют моему опыту и качеству обучения"
            },
            {
              icon: Heart,
              title: "Поддержка 24/7",
              description: "Закрытый Telegram-канал с постоянной поддержкой и ответами на вопросы"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[--color-beige]/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[--color-beige] to-[--color-gold] rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[--color-coffee-dark] mb-3">{item.title}</h3>
              <p className="text-[--color-coffee-medium]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
