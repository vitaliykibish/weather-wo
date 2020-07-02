import fs from 'fs';
import path from 'path';
import util from 'util';

fs.readFile = util.promisify(fs.readFile);

export const find = async (cityName) => {
	const pathData = path.resolve('mock-data', 'weather', cityName + '.json');
	const weather = fs.readFile(pathData, 'utf-8');

	return weather;
};
