const request = require('supertest');
const app = require('../app');

test('home page renders', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/Your Random Joke/);   
});

test('about page renders', async() => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/About Random Joke/);
});