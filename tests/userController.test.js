// tests/userController.test.js
const request = require('supertest');
const app = require('../src/app'); // Adjust the path if needed

describe('User Controller', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('User registered successfully.');
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'john@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Login successful');
    expect(res.body.token).toBeDefined();
  });
});
