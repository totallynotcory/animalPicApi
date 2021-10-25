const request = require('supertest');
const app = require('../src/app');

describe('app', () => {
  it("/?pet=cat gets a cat (200)", () => {
    request(app)
      .get('/?pet=cat')
      .expect(200)
  })
  
  it("/?pet=fordpinto doesn't get an fordpinto (400)", () => {
    request(app)
      .get("/?pet=fordpinto")
      .expect(400)
  })
});