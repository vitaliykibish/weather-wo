import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const fetchForecastByCityName = createAsyncThunk(
	'forecast/fetchForecastByCityName',
	async (cityName) => {
		return await api.getForecast(cityName);
	},
);

const forecastSlice = createSlice({
	name: 'forecast',
	initialState: { loading: false, error: null, data: {} },
	reducers: {},
	extraReducers: {
		[fetchForecastByCityName.pending]: (state) => {
			state.loading = true;
		},
		[fetchForecastByCityName.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[fetchForecastByCityName.fulfilled]: (state, action) => {
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

export default forecastSlice.reducer;
