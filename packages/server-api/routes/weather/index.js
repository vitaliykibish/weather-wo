import express from 'express';
import * as WeatherController from '../../controllers/weather/index.js';

const router = express.Router();

router.get('/weather/:cityName', WeatherController.getWeather);

export default router;
