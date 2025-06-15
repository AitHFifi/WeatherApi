// Express app setup, middleware, routes
const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weatherRoutes');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');

app.use(express.json());
app.use(rateLimiter);
app.use('/api', weatherRoutes);
app.use(errorHandler);

module.exports = app;
