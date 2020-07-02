import * as WeatherService from '../../models/weather/index.js';

export const getWeather = async (req, res, next) => {
	const { cityName } = req.params;

	try {
		const weather = await WeatherService.find(cityName);

		return res.status(200).json({
			status: 200,
			data: JSON.parse(weather),
			message: 'Succesfully Weather Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};
