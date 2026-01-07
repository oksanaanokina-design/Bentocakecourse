import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';
import { isActionAllowed, HoneypotProtection } from '../utils/spamProtection';
import PrivacyModal from './PrivacyModal';
import HoneypotField from './HoneypotField';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tariff: {
    name: string;
    price: string;
    url: string;
  };
}

export default function PaymentModal({ isOpen, onClose, tariff }: PaymentModalProps) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isBotDetected, setIsBotDetected] = useState(false);
  const [honeypotFieldName, setHoneypotFieldName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
      
      // Генерируем honeypot поле
      const honeypot = HoneypotProtection.getInstance();
      const fieldName = honeypot.generateFieldName();
      setHoneypotFieldName(fieldName);
      honeypot.registerForm(fieldName);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (cooldownSeconds > 0) {
      const timer = setTimeout(() => {
        setCooldownSeconds(cooldownSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldownSeconds]);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (!isAgreed) return;

    // Проверка на бота
    if (isBotDetected) {
      console.warn('[Security] Bot activity detected');
      return;
    }

    // Улучшенная проверка rate limit с прогрессивными штрафами
    const check = isActionAllowed('PAYMENT', 'payment_action');
    
    if (!check.allowed) {
      if (check.cooldown) {
        setCooldownSeconds(check.cooldown);
      }
      console.warn('[Security] Rate limit exceeded:', check.reason);
      return;
    }

    // Всё ок - открываем платёжную форму
    window.open(tariff.url, '_blank', 'noopener,noreferrer');
    onClose();
    setIsAgreed(false);
  };

  const handleBotDetected = () => {
    setIsBotDetected(true);
    console.warn('[Security] Bot detected via honeypot');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-3xl border border-[#D4B896]/20 p-10 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(212,184,150,0.2)' }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4B896]/10 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5 text-[#D4B896]" />
            </motion.button>

            {/* Header */}
            <div className="mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center text-3xl mb-6"
              >
                🎉
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Подтверждение записи
              </h2>
              <p className="text-[#D4B896]/60 font-light">
                Вы выбрали тариф <strong className="text-[#D4B896] font-semibold">{tariff.name}</strong>
              </p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-[#D4B896]/15 to-[#C9A882]/5 rounded-2xl p-6 border border-[#D4B896]/20 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-white/70 font-light">К оплате:</span>
                <span className="text-3xl font-bold text-white tracking-tight">{tariff.price}</span>
              </div>
            </div>

            {/* Checkbox */}
            <div className="mb-8">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <motion.div 
                    whileTap={{ scale: 0.9 }}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                      isAgreed 
                        ? 'bg-gradient-to-br from-[#D4B896] to-[#C9A882] border-[#D4B896]' 
                        : 'bg-[#1a1410]/50 border-[#D4B896]/30 group-hover:border-[#D4B896]/50'
                    }`}
                  >
                    {isAgreed && (
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-[#1a1410]" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </motion.svg>
                    )}
                  </motion.div>
                </div>
                <span className="text-[#D4B896]/70 leading-relaxed font-light group-hover:text-[#D4B896]/90 transition-colors">
                  Я согласен на обработку персональных данных и принимаю условия{' '}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPrivacyOpen(true);
                    }}
                    className="text-[#D4B896] hover:text-[#E5C9A7] underline underline-offset-2 font-medium"
                  >
                    политики конфиденциальности
                  </button>
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={isAgreed && cooldownSeconds === 0 ? { scale: 1.02 } : {}}
                whileTap={isAgreed && cooldownSeconds === 0 ? { scale: 0.98 } : {}}
                onClick={handleContinue}
                disabled={!isAgreed || cooldownSeconds > 0}
                className={`group flex-1 py-5 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2 ${
                  isAgreed && cooldownSeconds === 0
                    ? 'bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] shadow-lg shadow-[#D4B896]/30'
                    : 'bg-[#D4B896]/10 text-[#D4B896]/40 cursor-not-allowed'
                }`}
              >
                {cooldownSeconds > 0 
                  ? `Подождите ${cooldownSeconds}с...` 
                  : isAgreed 
                    ? <>
                        Перейти к оплате
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    : 'Примите условия'
                }
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(212,184,150,0.1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="px-8 py-5 rounded-full border border-[#D4B896]/30 text-[#D4B896] hover:border-[#D4B896]/50 transition-all font-semibold"
              >
                Отмена
              </motion.button>
            </div>

            {/* Security Note */}
            <div className="mt-8 flex items-center gap-2 text-sm text-[#D4B896]/50 font-light">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Платёжные данные защищены системой Продамус</span>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Privacy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </AnimatePresence>
  );
}