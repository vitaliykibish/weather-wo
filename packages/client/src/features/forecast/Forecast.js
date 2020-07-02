import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WeatherCard from '../../components/WeatherCard';
import { fetchForecastByCityName } from './forecastSlice';

import styles from './styles.module.scss';

const Forecast = ({ cityName, forecast, timeOfDay, fetchForecastByCityName }) => {
	useEffect(() => {
		fetchForecastByCityName(cityName);
	}, [cityName, fetchForecastByCityName]);

	const forecastCity = forecast?.data[cityName]?.data || [{}, {}];

	return (
		<div className={styles.root}>
			<h2>{`Next ${forecastCity.length} days`}</h2>
			{forecastCity.map((day, i) => {
				const temperature = day[`temperature_${timeOfDay}`];
				const weatherSymbol = day[`weather_symbol_${timeOfDay}`];
				const date = new Date(day.forecast_date);
				const weekDay = !isNaN(date) ? date.toLocaleString('default', { weekday: 'short' }) : '';

				return (
					<WeatherCard
						key={i}
						size="sm"
						weekDay={weekDay}
						isLoading={forecast.loading || forecast.error}
						temperature={temperature}
						weatherSymbol={weatherSymbol}
					/>
				);
			})}
		</div>
	);
};

export default connect(({ forecast }) => ({ forecast }), {
	fetchForecastByCityName,
})(Forecast);
