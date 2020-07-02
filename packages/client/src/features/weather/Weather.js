import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherByCityName } from './weatherSlice';
import WeatherCard from '../../components/WeatherCard';

import styles from './styles.module.scss';

const Weather = ({ cityName, weather, timeOfDay, fetchWeatherByCityName }) => {
	useEffect(() => {
		fetchWeatherByCityName(cityName);
	}, [cityName, fetchWeatherByCityName]);

	const weatherCity = weather?.data[cityName]?.data || {};

	return (
		<div className={styles.root}>
			<h2>Today</h2>
			<WeatherCard
				size="lg"
				isLoading={weather.loading || weather.error}
				temperature={weatherCity[`temperature_${timeOfDay}`]}
				weatherSymbol={weatherCity[`weather_symbol_${timeOfDay}`]}
			/>
		</div>
	);
};

export default connect(({ weather }) => ({ weather }), {
	fetchWeatherByCityName,
})(Weather);
