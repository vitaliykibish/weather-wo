import app from './server';
import supertest from 'supertest';

const request = supertest(app);

describe('Router', () => {
	it('GET 200 weather', async () => {
		const res = await request.get('/weather/amsterdam');

		expect(res.status).toBe(200);
	});

	it('GET 200 forecast', async () => {
		const res = await request.get('/forecast/amsterdam');

		expect(res.status).toBe(200);
	});

	it('GET 404 weather', async () => {
		const res = await request.get('/weather');

		expect(res.status).toBe(404);
	});

	it('GET 404 forecast', async () => {
		const res = await request.get('/forecast');

		expect(res.status).toBe(404);
	});
});
