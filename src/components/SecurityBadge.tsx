import { Shield, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityBadgeProps {
  variant?: 'inline' | 'standalone';
  showDetails?: boolean;
}

/**
 * Визуальный индикатор защиты от спама
 * Показывает пользователю, что сайт защищён
 */
export default function SecurityBadge({ 
  variant = 'inline', 
  showDetails = false 
}: SecurityBadgeProps) {
  
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 text-sm text-[#D4B896]/50">
        <Shield className="w-4 h-4" />
        <span>Защита от спама активна</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-[#D4B896]/10 to-[#C9A882]/5 rounded-2xl p-6 border border-[#D4B896]/20"
    >
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center flex-shrink-0"
        >
          <Shield className="w-6 h-6 text-[#1a1410]" />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            Защищённая платформа
            <CheckCircle className="w-4 h-4 text-[#D4B896]" />
          </h3>
          <p className="text-[#D4B896]/70 text-sm leading-relaxed mb-3">
            Ваши данные защищены многоуровневой системой безопасности
          </p>
          
          {showDetails && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#D4B896]/60">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4B896]" />
                <span>Защита от автоматических запросов</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D4B896]/60">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4B896]" />
                <span>Ограничение частоты операций</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D4B896]/60">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4B896]" />
                <span>Шифрование платёжных данных</span>
              </div>
            </div>
          )}
        </div>
        
        <Lock className="w-4 h-4 text-[#D4B896]/30" />
      </div>
    </motion.div>
  );
}

/**
 * Маленький badge для футера
 */
export function SecurityBadgeSmall() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D4B896]/10 rounded-full border border-[#D4B896]/20">
      <Shield className="w-3 h-3 text-[#D4B896]" />
      <span className="text-xs text-[#D4B896]/70">Защищено</span>
    </div>
  );
}
