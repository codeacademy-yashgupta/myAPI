const axios = require('axios');
const server = require('../../server');

describe('the user POST route', () => {
  it('it should return 201 when user is successfully added', async () => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        name: 'Yash',
        email: 'yash@mckinsey.com',
      },
    };
    // axios.post('/user', {
    //   name: 'Yash',
    //   email: 'guptayash@gmail.com',
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
  it('should return string User created as a response', async () => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        name: 'Yash',
        email: 'yash@mckinsey.com',
      },
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('User created');
  });
});
