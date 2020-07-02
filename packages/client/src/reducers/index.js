import { combineReducers } from '@reduxjs/toolkit';

import weatherReducer from '../features/weather/weatherSlice';
import forecastReducer from '../features/forecast/forecastSlice';

export default combineReducers({
	weather: weatherReducer,
	forecast: forecastReducer,
});
