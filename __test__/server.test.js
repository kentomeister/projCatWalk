const request = require('supertest');
const app = require('../server/app');

describe('Testing the server', () => {

  test('server should respond to get request to /test endpoint', () => {
    expect.assertions(1);
    return  request(app)
      .get('/test')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('server should respond to /productOverview/:productId endpoint', () => {
    expect.assertions(2);
    return request(app)
      .get('/productOverview/19092')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
      });
  });

  test('server should respond to /productOverview/:productId endpoint with correct data', () => {
    expect.assertions(8);
    return request(app)
      .get('/productOverview/19092')
      .then(response => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('category');
        expect(response.body).toHaveProperty('default_price');
        expect(response.body).toHaveProperty('slogan');
        expect(response.body).toHaveProperty('description');
        expect(response.body).toHaveProperty('avgRating');
        expect(response.body).toHaveProperty('numReviews');
        expect(response.body).toHaveProperty('styles');
      });
  });

  test('server should respond with status code 500 if product id is incorrect', () => {
    expect.assertions(1);
    return request(app)
      .get('/productOverview/123123')
      .then((res) => {
        expect(res.statusCode).toBe(500);
      });
  });

});
