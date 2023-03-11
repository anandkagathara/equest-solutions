const rateLimit = require('express-rate-limit');
const requestCache = {};

const limiter = rateLimit({
  windowMs: 20 * 1000,
  max: 10,
  keyGenerator: (req) => req.ip,
  handler: (req, res, next) => {
    const ipAddress = req.ip;
    const now = Date.now();
    const cache = requestCache[ipAddress] || { count: 0, last: now };
    const diff = now - cache.last;

    if (cache.count > 100 && diff < 60 * 1000) {
      return res
        .status(400)
        .send('Send too many requests, This IP blocked permanently');
    }
    cache.count += 1;
    cache.last = now;
    requestCache[ipAddress] = cache;

    if (cache.count > 10) {
      return res
        .status(400)
        .send('Too many requests, IP blocked for 20 minutes');
    }
    next();
  },
});

module.exports = limiter;
