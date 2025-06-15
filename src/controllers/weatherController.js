// Logic for weather endpoint
const weatherService = require('../services/weatherService');
const cacheService = require('../services/cacheService');

exports.getWeather = async (req, res, next) => {
  try {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: 'City is required' });
    // Try cache first
    const cached = await cacheService.get(city);
    if (cached) return res.json(JSON.parse(cached));
    // Fetch from API
    const weather = await weatherService.fetchWeather(city);
    await cacheService.set(city, JSON.stringify(weather));
    res.json(weather);
  } catch (err) {
    next(err);
  }
};
