// Caching logic (get/set Redis)
const redisClient = require('../config/redis');

exports.get = async (key) => {
  return await redisClient.get(key);
};

exports.set = async (key, value, ttl = 600) => {
  await redisClient.set(key, value, { EX: ttl });
};
