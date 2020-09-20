const request = require('supertest');
const app = require('../api');

describe('Get route', () => {
    it('page should return json', async(done) => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        done();
    });
});

afterAll(async() => { await app.close() });