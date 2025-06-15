# Weather API

A simple Node.js Express API to fetch weather data with Redis caching and rate limiting.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start Redis server locally or use a Redis cloud provider.
3. Start the server:
   ```sh
   npm start
   ```

## Endpoints

- `GET /api/weather?city=CityName` — Get weather for a city
