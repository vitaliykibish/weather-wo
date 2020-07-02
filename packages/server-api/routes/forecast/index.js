import express from 'express';
import * as ForecastController from '../../controllers/forecast/index.js';

const router = express.Router();

router.get('/forecast/:cityName', ForecastController.getForecast);

export default router;
