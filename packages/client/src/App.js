import React from 'react';
import { useParams } from 'react-router-dom';

import Weather from './features/weather/Weather';
import Forecast from './features/forecast/Forecast';
import Nav from './components/Nav';

import { getTimeOfDay } from './utils';

import styles from './styles.module.scss';

const cities = [
	{ value: 'amsterdam', label: 'Amsterdam' },
	{ value: 'zeist', label: 'Zeist' },
];

const App = () => {
	const { cityName } = useParams();
	const timeOfDay = getTimeOfDay(new Date());

	return (
		<div className={styles.root}>
			<header>
				<Nav activeItem={cityName} items={cities} />
			</header>
			<main>
				<h1>{cities.find(({ value }) => cityName === value)?.label}</h1>
				<article>
					<div className={styles.weather}>
						<Weather cityName={cityName} timeOfDay={timeOfDay} />
						<Forecast cityName={cityName} timeOfDay={'afternoon'} />
					</div>
				</article>
			</main>
		</div>
	);
};

export default App;
