import * as ForecastModel from '../../models/forecast/index.js';

export const getForecast = async (req, res, next) => {
	const { cityName } = req.params;

	try {
		const forecast = await ForecastModel.find(cityName);

		return res.status(200).json({
			status: 200,
			data: JSON.parse(forecast),
			message: 'Succesfully Forecast Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};
