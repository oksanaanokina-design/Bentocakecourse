import { useState, FormEvent } from 'react'
import { motion } from 'motion/react'
import { X, Send } from 'lucide-react'

interface EnrollmentFormProps {
  plan: string
  onClose: () => void
}

export default function EnrollmentForm({ plan, onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    instagram: '',
    consent: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных')
      return
    }
    
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Закрыть форму через 3 секунды
    setTimeout(() => {
      onClose()
    }, 3000)
  }
  
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-12 max-w-md text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h3 className="text-[--color-coffee-dark] mb-4">Заявка отправлена!</h3>
          <p className="text-[--color-coffee-medium]">
            Мы свяжемся с вами в ближайшее время для подтверждения записи на курс
          </p>
        </motion.div>
      </motion.div>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[--color-coffee-dark]">Запись на курс — {plan}</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-[--color-coffee-medium]" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[--color-coffee-dark] mb-2">
              Имя и фамилия <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-[--color-beige] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-gold] text-[--color-coffee-dark]"
              placeholder="Анна Иванова"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[--color-coffee-dark] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-[--color-beige] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-gold] text-[--color-coffee-dark]"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-[--color-coffee-dark] mb-2">
                Телефон <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-[--color-beige] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-gold] text-[--color-coffee-dark]"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[--color-coffee-dark] mb-2">
              Telegram username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.telegram}
              onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
              className="w-full px-4 py-3 border border-[--color-beige] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-gold] text-[--color-coffee-dark]"
              placeholder="@username"
            />
          </div>
          
          {plan === 'Premium' && (
            <div>
              <label className="block text-[--color-coffee-dark] mb-2">
                Ссылка на Instagram (для разбора)
              </label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-4 py-3 border border-[--color-beige] rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-gold] text-[--color-coffee-dark]"
                placeholder="instagram.com/username"
              />
            </div>
          )}
          
          <div className="bg-[--color-beige]/10 rounded-xl p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 text-[--color-gold] border-[--color-beige] rounded focus:ring-[--color-gold]"
              />
              <span className="text-sm text-[--color-coffee-medium]">
                Я даю согласие на обработку персональных данных в соответствии с{' '}
                <a href="/privacy" target="_blank" className="text-[--color-gold] hover:underline">
                  политикой конфиденциальности
                </a>{' '}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[--color-gold] to-[--color-beige] text-[--color-coffee-dark] py-4 rounded-full hover:shadow-lg hover:shadow-[--color-gold]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[--color-coffee-dark]/30 border-t-[--color-coffee-dark] rounded-full animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Отправить заявку
              </>
            )}
          </button>
          
          <p className="text-sm text-[--color-coffee-medium] text-center">
            После отправки заявки мы свяжемся с вами для подтверждения оплаты и добавления в Telegram-канал
          </p>
        </form>
      </motion.div>
    </motion.div>
  )
}
