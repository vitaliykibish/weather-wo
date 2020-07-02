import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const fetchWeatherByCityName = createAsyncThunk(
	'weather/fetchWeatherByCityName',
	async (cityName) => {
		return await api.getWeather(cityName);
	},
);

const weatherSlice = createSlice({
	name: 'weather',
	initialState: { loading: false, error: null, data: {} },
	reducers: {},
	extraReducers: {
		[fetchWeatherByCityName.pending]: (state) => {
			state.loading = true;
		},
		[fetchWeatherByCityName.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[fetchWeatherByCityName.fulfilled]: (state, action) => {
			const city_name = action.payload?.geoinfo?.city_name;

			if (typeof city_name !== 'string') {
				state.loading = false;
				state.error = {
					message: 'Incorrect response data',
				};

				return;
			}

			state.error = null;
			state.loading = false;
			state.data[city_name.toLowerCase()] = action.payload;
		},
	},
});

export default weatherSlice.reducer;
