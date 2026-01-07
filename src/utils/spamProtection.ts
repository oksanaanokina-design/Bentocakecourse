/**
 * Продвинутая система защиты от спама
 * Многоуровневая защита для предотвращения злоупотреблений
 */

// ============================================
// 1. RATE LIMITER с прогрессивными задержками
// ============================================

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  progressivePenalty?: boolean; // Увеличивать задержку при повторных попытках
}

class AdvancedRateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private penalties: Map<string, number> = new Map();

  /**
   * Проверка разрешена ли операция
   */
  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Удаляем старые попытки за пределами окна
    const validAttempts = attempts.filter(
      timestamp => now - timestamp < config.windowMs
    );
    
    // Проверяем прогрессивный штраф
    if (config.progressivePenalty) {
      const penalty = this.penalties.get(key) || 0;
      if (penalty > 0 && now < penalty) {
        return false; // Еще действует штраф
      }
    }
    
    // Проверяем лимит
    if (validAttempts.length < config.maxAttempts) {
      validAttempts.push(now);
      this.attempts.set(key, validAttempts);
      return true;
    }
    
    // Превышен лимит - устанавливаем прогрессивный штраф
    if (config.progressivePenalty) {
      const currentPenalty = this.penalties.get(key) || 0;
      const penaltyMultiplier = validAttempts.length - config.maxAttempts + 1;
      const newPenalty = now + (config.windowMs * penaltyMultiplier);
      this.penalties.set(key, newPenalty);
    }
    
    return false;
  }

  /**
   * Получить оставшееся время блокировки
   */
  getRemainingCooldown(key: string, config: RateLimitConfig): number {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    const penalty = this.penalties.get(key) || 0;
    
    if (penalty > now) {
      return penalty - now; // Возвращаем время штрафа
    }
    
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = attempts[0];
    const cooldownEnd = oldestAttempt + config.windowMs;
    const remaining = Math.max(0, cooldownEnd - now);
    
    return remaining;
  }

  /**
   * Очистить историю
   */
  clear(key: string): void {
    this.attempts.delete(key);
    this.penalties.delete(key);
  }

  /**
   * Получить количество попыток
   */
  getAttemptCount(key: string): number {
    return (this.attempts.get(key) || []).length;
  }
}

export const advancedRateLimiter = new AdvancedRateLimiter();

// ============================================
// 2. HONEYPOT ЗАЩИТА (от ботов)
// ============================================

export class HoneypotProtection {
  private static instance: HoneypotProtection;
  private honeypotValues: Map<string, string> = new Map();

  static getInstance(): HoneypotProtection {
    if (!HoneypotProtection.instance) {
      HoneypotProtection.instance = new HoneypotProtection();
    }
    return HoneypotProtection.instance;
  }

  /**
   * Генерация уникального имени для honeypot поля
   */
  generateFieldName(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `field_${timestamp}_${random}`;
  }

  /**
   * Проверка honeypot - если заполнен, это бот
   */
  isBot(fieldName: string, value: string): boolean {
    // Если поле заполнено - это бот
    if (value && value.trim() !== '') {
      console.warn('[Honeypot] Bot detected - honeypot field filled');
      return true;
    }
    
    // Проверяем время заполнения формы (боты заполняют слишком быстро)
    const submissionTime = Date.now();
    const creationTime = this.honeypotValues.get(fieldName);
    
    if (creationTime) {
      const timeDiff = submissionTime - parseInt(creationTime);
      // Если форма заполнена менее чем за 2 секунды - подозрительно
      if (timeDiff < 2000) {
        console.warn('[Honeypot] Bot detected - form filled too fast');
        return true;
      }
    }
    
    return false;
  }

  /**
   * Регистрация создания формы
   */
  registerForm(fieldName: string): void {
    this.honeypotValues.set(fieldName, Date.now().toString());
  }
}

// ============================================
// 3. DEBOUNCE / THROTTLE утилиты
// ============================================

/**
 * Debounce - откладывает выполнение до окончания серии вызовов
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle - ограничивает частоту вызовов
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================
// 4. BROWSER FINGERPRINT (простой)
// ============================================

export class BrowserFingerprint {
  private static fingerprint: string | null = null;

  /**
   * Получить fingerprint браузера
   */
  static getFingerprint(): string {
    if (this.fingerprint) return this.fingerprint;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    let fingerprint = '';
    
    // Собираем данные о браузере
    fingerprint += navigator.userAgent;
    fingerprint += navigator.language;
    fingerprint += screen.width + 'x' + screen.height;
    fingerprint += screen.colorDepth;
    fingerprint += new Date().getTimezoneOffset();
    
    // Canvas fingerprint
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('fingerprint', 2, 2);
      fingerprint += canvas.toDataURL();
    }
    
    // Простой хеш
    this.fingerprint = this.simpleHash(fingerprint);
    return this.fingerprint;
  }

  /**
   * Простая хеш-функция
   */
  private static simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36);
  }
}

// ============================================
// 5. ГОТОВЫЕ КОНФИГИ ЗАЩИТЫ
// ============================================

export const SPAM_PROTECTION = {
  // Очень строгая защита для платежей
  PAYMENT: {
    maxAttempts: 3,
    windowMs: 60000, // 1 минута
    progressivePenalty: true,
  },
  
  // Средняя защита для кнопок
  BUTTON: {
    maxAttempts: 5,
    windowMs: 10000, // 10 секунд
    progressivePenalty: false,
  },
  
  // Мягкая защита для навигации
  NAVIGATION: {
    maxAttempts: 10,
    windowMs: 5000, // 5 секунд
    progressivePenalty: false,
  },
  
  // Защита модальных окон
  MODAL: {
    maxAttempts: 8,
    windowMs: 30000, // 30 секунд
    progressivePenalty: true,
  },
} as const;

// ============================================
// 6. МОНИТОРИНГ ПОДОЗРИТЕЛЬНОЙ АКТИВНОСТИ
// ============================================

class SuspiciousActivityMonitor {
  private actions: Map<string, number> = new Map();
  private blacklist: Set<string> = new Set();

  /**
   * Отследить действие
   */
  track(fingerprint: string): void {
    const count = (this.actions.get(fingerprint) || 0) + 1;
    this.actions.set(fingerprint, count);

    // Если более 100 действий за сессию - подозрительно
    if (count > 100) {
      this.blacklist.add(fingerprint);
      console.warn('[Security] Suspicious activity detected:', fingerprint);
    }
  }

  /**
   * Проверить в черном списке
   */
  isBlacklisted(fingerprint: string): boolean {
    return this.blacklist.has(fingerprint);
  }

  /**
   * Очистить историю
   */
  clear(): void {
    this.actions.clear();
    // Черный список НЕ очищаем
  }
}

export const activityMonitor = new SuspiciousActivityMonitor();

// ============================================
// 7. ЭКСПОРТ ГЛАВНОЙ ФУНКЦИИ ПРОВЕРКИ
// ============================================

/**
 * Главная функция проверки перед важным действием
 */
export function isActionAllowed(
  actionType: keyof typeof SPAM_PROTECTION,
  identifier?: string
): { allowed: boolean; reason?: string; cooldown?: number } {
  const fingerprint = BrowserFingerprint.getFingerprint();
  const key = identifier || actionType;
  
  // 1. Проверка черного списка
  if (activityMonitor.isBlacklisted(fingerprint)) {
    return {
      allowed: false,
      reason: 'Suspicious activity detected',
    };
  }
  
  // 2. Проверка rate limit
  const config = SPAM_PROTECTION[actionType];
  if (!advancedRateLimiter.isAllowed(key, config)) {
    const cooldown = advancedRateLimiter.getRemainingCooldown(key, config);
    return {
      allowed: false,
      reason: 'Rate limit exceeded',
      cooldown: Math.ceil(cooldown / 1000), // в секундах
    };
  }
  
  // 3. Отслеживание активности
  activityMonitor.track(fingerprint);
  
  return { allowed: true };
}

// ============================================
// 8. REACT HOOKS для удобства
// ============================================

/**
 * Hook для защиты кнопки от спама
 */
export function useSpamProtection(actionType: keyof typeof SPAM_PROTECTION, identifier?: string) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const checkAction = (): boolean => {
    const result = isActionAllowed(actionType, identifier);
    
    if (!result.allowed) {
      setIsBlocked(true);
      if (result.cooldown) {
        setCooldown(result.cooldown);
        
        // Автоматический countdown
        const interval = setInterval(() => {
          setCooldown(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              setIsBlocked(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
      return false;
    }
    
    return true;
  };

  return { isBlocked, cooldown, checkAction };
}

// Для использования в React компонентах
import { useState } from 'react';
