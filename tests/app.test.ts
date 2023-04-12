import * as request from 'supertest';
import app from '../src/app';
import { HEADER_SECRET } from '../src/config'; 


// sample tests to check out endpoints

describe('Sample API Test', () => {
    it('should return a JSON array object with a name property that is a string type', async () => {
      const response = await request(app).get('/api/test').set({header_secret:  HEADER_SECRET}); // how to add authorization
      expect(response.status).toBe(200);
      expect(response.body[0]).toHaveProperty('name');
      expect(typeof response.body[0].name).toBe('string');
    });
  
    it('should return a JSON array object with phone, name, and is_true properties', async () => {
      const response = await request(app).get('/api/test/642db8b7be8fd282e42989a8');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('phone');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('is_true');
    });
  
    it('should return a 404 status code for an invalid endpoint', async () => {
      const response = await request(app).get('/api/invalid');
      expect(response.status).toBe(404);
    });
});