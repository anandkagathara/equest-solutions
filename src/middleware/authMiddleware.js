const validateBearerToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader || bearerHeader !== 'Bearer mf8nrqICaHYD1y8wRMBksWm7U7gLgXy1mSWjhI0q') {
      return res.status(400).json({ error: 'Invalid Bearer Token' });
    }
    next();
  };
  
  module.exports = { validateBearerToken };
  