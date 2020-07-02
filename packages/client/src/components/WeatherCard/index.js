import React from 'react';

import styles from './styles.module.scss';

const baseIconUrl = 'https://www.weeronline.nl/assets/380966e7ec304f310d9c8219ecc7be0d680fd676';

const WeatherCard = ({ weekDay, isLoading, size = 'sm', weatherSymbol, temperature }) => {
	const src = weatherSymbol ? `${baseIconUrl}/${weatherSymbol}.svg` : '';

	return (
		<p className={`${styles.root} ${isLoading ? styles.loading : ''} ${styles[size]}`}>
			<span className={styles.weekDay}>{weekDay}</span>
			<span className={styles.weather}>
				<span className={styles.temp}>{temperature}</span>
				<span className={styles.icon}>
					<img src={src} alt={weatherSymbol} />
				</span>
			</span>
		</p>
	);
};

export default WeatherCard;
