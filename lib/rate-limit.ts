// Rate limiting utility to prevent spam
type RateLimitStore = {
  [key: string]: {
    count: number;
    resetTime: number;
  };
};

const store: RateLimitStore = {};

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests allowed in the interval
}

export function rateLimit(config: RateLimitConfig) {
  const { interval, maxRequests } = config;

  return {
    check: (identifier: string): { success: boolean; remaining: number; resetTime: number } => {
      const now = Date.now();
      const key = identifier;

      if (!store[key] || store[key].resetTime < now) {
        // First request or expired window
        store[key] = {
          count: 1,
          resetTime: now + interval,
        };
        return {
          success: true,
          remaining: maxRequests - 1,
          resetTime: store[key].resetTime,
        };
      }

      // Increment counter
      store[key].count++;

      if (store[key].count > maxRequests) {
        return {
          success: false,
          remaining: 0,
          resetTime: store[key].resetTime,
        };
      }

      return {
        success: true,
        remaining: maxRequests - store[key].count,
        resetTime: store[key].resetTime,
      };
    },
  };
}

// Create rate limiter for contact form: 3 requests per 15 minutes
export const contactRateLimiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  maxRequests: 3,
});
