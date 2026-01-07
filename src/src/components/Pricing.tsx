import { motion } from 'motion/react'
import { useInView } from '../hooks/useInView'
import { Check, Star } from 'lucide-react'
import EnrollmentForm from './EnrollmentForm'
import { useState } from 'react'

const plans = [
  {
    name: "Standard",
    price: "10 500",
    features: [
      "9 основных видео-уроков",
      "2 бонусных урока для выпускников",
      "Доступ к закрытому Telegram-каналу",
      "Пожизненный доступ к материалам",
      "Обратная связь в общем чате",
      "Сертификат о прохождении курса"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "14 500",
    features: [
      "Всё из тарифа Standard",
      "Личная консультация 30 минут",
      "Разбор вашего аккаунта в соцсетях",
      "Индивидуальные рекомендации",
      "Приоритетная поддержка",
      "Доступ к эксклюзивным материалам"
    ],
    popular: true
  }
]

export default function Pricing() {
  const [ref, isInView] = useInView()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  
  return (
    <section id="pricing" ref={ref} className="py-20 px-4 bg-[--color-cream]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[--color-coffee-dark] mb-4">Выберите свой тариф</h2>
          <p className="text-[--color-coffee-medium] max-w-2xl mx-auto">
            Инвестиция в навык, который окупится уже после первых заказов
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                plan.popular ? 'border-2 border-[--color-gold] md:scale-105' : 'border border-[--color-beige]/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[--color-gold] to-[--color-beige] text-[--color-coffee-dark] px-6 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Популярный</span>
                </div>
              )}
              
              <h3 className="text-[--color-coffee-dark] mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-[--color-coffee-dark]">{plan.price}</span>
                <span className="text-xl text-[--color-coffee-medium]"> ₽</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[--color-gold] flex-shrink-0 mt-0.5" />
                    <span className="text-[--color-coffee-medium]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-4 rounded-full transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[--color-gold] to-[--color-beige] text-[--color-coffee-dark] hover:shadow-lg hover:shadow-[--color-gold]/30'
                    : 'bg-[--color-coffee-dark] text-white hover:bg-[--color-coffee-medium]'
                }`}
              >
                Записаться на курс
              </button>
            </motion.div>
          ))}
        </div>
        
        {selectedPlan && (
          <EnrollmentForm 
            plan={selectedPlan} 
            onClose={() => setSelectedPlan(null)} 
          />
        )}
      </div>
    </section>
  )
}
