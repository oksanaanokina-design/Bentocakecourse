// Simple rate limiting utility for client-side spam protection
// Prevents users from making too many requests in a short time period

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

class RateLimiter {
  private attempts: Map<string, number[]> = new Map();

  /**
   * Check if an action is allowed based on rate limiting
   * @param key - Unique identifier for the action (e.g., 'button_click', 'form_submit')
   * @param config - Configuration for rate limiting
   * @returns true if action is allowed, false if rate limited
   */
  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove attempts outside the time window
    const validAttempts = attempts.filter(
      timestamp => now - timestamp < config.windowMs
    );
    
    // Check if under the limit
    if (validAttempts.length < config.maxAttempts) {
      validAttempts.push(now);
      this.attempts.set(key, validAttempts);
      return true;
    }
    
    return false;
  }

  /**
   * Get remaining cooldown time in milliseconds
   * @param key - Unique identifier for the action
   * @param config - Configuration for rate limiting
   * @returns remaining cooldown time in ms, or 0 if no cooldown
   */
  getRemainingCooldown(key: string, config: RateLimitConfig): number {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = attempts[0];
    const cooldownEnd = oldestAttempt + config.windowMs;
    const remaining = Math.max(0, cooldownEnd - now);
    
    return remaining;
  }

  /**
   * Clear all attempts for a specific key
   */
  clear(key: string): void {
    this.attempts.delete(key);
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();

// Pre-configured rate limit configs
export const RATE_LIMITS = {
  // Button clicks: max 3 clicks per 5 seconds
  BUTTON_CLICK: {
    maxAttempts: 3,
    windowMs: 5000,
  },
  // Form submissions: max 2 submissions per 10 seconds
  FORM_SUBMIT: {
    maxAttempts: 2,
    windowMs: 10000,
  },
  // Modal opens: max 5 opens per 30 seconds
  MODAL_OPEN: {
    maxAttempts: 5,
    windowMs: 30000,
  },
} as const;
