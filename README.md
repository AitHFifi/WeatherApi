# Weather API

A simple Node.js REST API to fetch current weather data for a city, with Redis caching and rate limiting. Runs easily with Docker Compose.

---

## Features

- Fetches weather data from [OpenWeatherMap](https://openweathermap.org/api)
- Caches responses in Redis for faster repeated queries
- Rate limiting to prevent abuse
- Dockerized for easy local development

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
- [OpenWeatherMap API key](https://openweathermap.org/appid) (free tier available)

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/WeatherApi.git
cd WeatherApi
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your API key:

```sh
cp .env.example .env
```

Edit `.env` and set:

```
WEATHER_API_KEY=your_openweathermap_api_key
```

Other defaults should work for local Docker Compose.

---

### 3. Build and run with Docker Compose

```sh
docker-compose up --build
```

This will start both the API server and Redis.

---

### 4. Test the API

Use your browser, curl, or Postman:

```
GET http://localhost:4000/api/weather?city=London
```

**Example response:**
```json
{
  "city": "London",
  "temperature": 18.5,
  "description": "clear sky"
}
```

## Useful Commands

- **Start services:**  
  `docker-compose up --build`
- **Stop services:**  
  `docker-compose down`
- **Install dependencies (if running locally):**  
  `npm install`

---

## Troubleshooting

- **Docker not running:**  
  Make sure Docker Desktop is started.
- **API key invalid:**  
  Double-check your OpenWeatherMap API key.
- **Port already in use:**  
  Change the `PORT` in `.env` and `docker-compose.yml` if needed.

---

https://roadmap.sh/projects/weather-api-wrapper-service