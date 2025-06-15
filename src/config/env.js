// Loads and validates environment variables
require('dotenv').config();

const requiredVars = ['PORT', 'REDIS_URL', 'WEATHER_API_KEY'];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`);
  }
});

module.exports = {
  port: process.env.PORT,
  redisUrl: process.env.REDIS_URL,
  weatherApiKey: process.env.WEATHER_API_KEY,
};
