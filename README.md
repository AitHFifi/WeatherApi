# Weather API

A simple Node.js Express API to fetch weather data with Redis caching and rate limiting.

## Setup

1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start Redis server locally or use a Redis cloud provider.
4. Start the server:
   ```sh
   npm start
   ```

## Endpoints

- `GET /api/weather?city=CityName` — Get weather for a city
