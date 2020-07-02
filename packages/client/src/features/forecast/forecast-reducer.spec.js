import reducer from './forecastSlice';

describe('Forecast reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			error: null,
			loading: false,
			data: {},
		});
	});

	it('should handle Loading', () => {
		expect(
			reducer(undefined, {
				type: 'forecast/fetchForecastByCityName/pending',
			}),
		).toEqual({
			error: null,
			loading: true,
			data: {},
		});
	});

	it('should handle Error', () => {
		expect(
			reducer(undefined, {
				type: 'forecast/fetchForecastByCityName/rejected',
				error: { msg: 'Error' },
			}),
		).toEqual({
			error: { msg: 'Error' },
			loading: false,
			data: {},
		});
	});

	it('should handle Success', () => {
		expect(
			reducer(undefined, {
				type: 'forecast/fetchForecastByCityName/fulfilled',
				payload: { geoinfo: { city_name: 'ams' } },
			}),
		).toEqual({
			error: null,
			loading: false,
			data: { ams: { geoinfo: { city_name: 'ams' } } },
		});
	});

	it('should handle Error in case incorrect response data', () => {
		expect(
			reducer(undefined, {
				type: 'forecast/fetchForecastByCityName/fulfilled',
				payload: {},
			}),
		).toEqual({
			error: { message: 'Incorrect response data' },
			loading: false,
			data: {},
		});
	});
});
