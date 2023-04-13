// supertest documentation: https://www.npmjs.com/package/supertest
// TODO: asynchronous operations do not get stopped with current code.
// Need to refactor to automatically stop after tests have run.

import * as request from 'supertest';
import app from '../src/app';
import { HEADER_SECRET } from '../src/config';


// sample tests to check out endpoints
// in order:
  // get all
  // create
  // get previously created
  // update previously created
  // delete previously created
  // bad route (404)

describe('Sample API Test', () => {

    // set original length of getAll and make sure no documents remain after test runs
    let originalLength = 0;
    // get all
    it('Get all documents @ GET /api/test', async () => {
      const response = await request(app).get('/api/test').set({header_secret:  HEADER_SECRET}); // rudimentary source validation
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true); 
      expect(response.body[0]).toHaveProperty('name');
      expect(typeof response.body[0].name).toBe('string');
      originalLength = response.body.length;
    });

    // MongoDB ObjectID to be used in multiple:
    let fakeId = undefined;
    // create
    it('Create a document @ POST /api/test', async () => {
      const response = await request(app).post('/api/test')
            .send({
              "name": "apiTest",
              "phone": "1234567",
              "is_true": true
            });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name');
      expect(response.body.name).toBe('apiTest');
      fakeId = response.body._id;
    });

    // get one (previously created)
    it('Get one document @ GET /api/test/:id', async () => {
      const response = await request(app).get('/api/test/' + fakeId);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('phone');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('is_true');
    });
  
    // update (previously created)
    it('Update one document @ PUT /api/test/:id', async () => {
      const response = await request(app).put('/api/test/' + fakeId)
            .send({
              "name": "apiTest2",
              "phone": "1234567",
              "is_true": true
            });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name');
      expect(typeof response.body.name).toBe('string');
      expect(response.body.name).toBe('apiTest2');
    });

    // delete (previously created)
     it('Delete one document @ DELETE /api/test/:id', async () => {
      const response = await request(app).delete('/api/test/' + fakeId);
      expect(response.status).toBe(200);
    });

    it('Check length of collection to match original', async () => {
      const response = await request(app).get('/api/test').set({header_secret:  HEADER_SECRET});
      expect(response.body.length).toBe(originalLength);
    });

    // bad route (404)
    it('Bad route / not found @ GET /api/invalid', async () => {
      const response = await request(app).get('/api/invalid');
      expect(response.status).toBe(404);
    });
});