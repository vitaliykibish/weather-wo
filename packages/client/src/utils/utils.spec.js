import { getTimeOfDay } from './index';

describe('Utils', () => {
	describe('getTimeOfDay', () => {
		it('should return morning', () => {
			const date = new Date('January 31 1980 11:30');
			const timeOfDay = getTimeOfDay(date);

			expect(timeOfDay).toEqual('morning');
		});
		it('should return afternoon', () => {
			const date = new Date('January 31 1980 14:30');
			const timeOfDay = getTimeOfDay(date);

			expect(timeOfDay).toEqual('afternoon');
		});
		it('should return evening', () => {
			const date = new Date('January 31 1980 18:30');
			const timeOfDay = getTimeOfDay(date);

			expect(timeOfDay).toEqual('evening');
		});
		it('should return night', () => {
			const date = new Date('January 31 1980 23:30');
			const timeOfDay = getTimeOfDay(date);

			expect(timeOfDay).toEqual('night');
		});
	});
});
