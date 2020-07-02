import axios from 'axios';

const CancelToken = axios.CancelToken;
const cancelTokens = {};

axios.interceptors.request.use((config) => {
	const cancel = cancelTokens[config.url];
	cancel && cancel();
	delete cancelTokens[config.url];

	config.cancelToken = new CancelToken((c) => {
		cancelTokens[config.url] = c;
	});

	return config;
});

export const getWeather = async (cityName) => {
	const url = `http://localhost:3001/weather/${cityName}`;
	const res = await axios.get(url);

	return res.data.data.weeronline;
};

export const getForecast = async (cityName) => {
	const url = `http://localhost:3001/forecast/${cityName}`;
	const res = await axios.get(url);

	return res.data.data.weeronline;
};
