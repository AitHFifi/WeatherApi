// Logic to call 3rd party weather API
const axios = require('axios');
const { weatherApiKey } = require('../config/env');

exports.fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=metric`;
  const { data } = await axios.get(url);
  return data;
};
