'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API Server', ()=> {

    // scenarios
    it('handles not found ', async () => {
        
        // add test 1
        const response = await request.get('/asd'); 
        expect(response.status).toEqual(404);
    });
   
      // add test 2
    it('handles 404 on a bad method', async () => {
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

      // add test 3
    it('get data ', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
     
    
    });

    
});

  // ===============================

  describe('test car API', ()=> {


  it('get data from car database', async () => {
    const response = await request.get('/car'); // async
    expect(response.status).toEqual(200);
 

});



it('create car', async () => {
    const reqBody={"name":"bmw",
   }
    const response = await request.post('/car').send(reqBody); 
    expect(response.status).toEqual(200);
  
    

});

it('update car', async () => {
    const response = await request.put('/car/1'); 
    expect(response.status).toEqual(200);
    

});
it('delete car', async () => {
    const response = await request.delete('/car/1'); 
    expect(response.status).toEqual(204);

});

});

