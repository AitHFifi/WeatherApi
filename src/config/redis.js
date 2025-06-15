// Redis client setup and export
const redis = require('redis');
const { redisUrl } = require('./env');

const client = redis.createClient({ url: redisUrl });
client.connect().catch(console.error);

module.exports = client;
