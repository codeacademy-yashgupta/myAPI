const Joi = require('joi');
const createUserHandler = require('./../handlers/createUserHandler');

module.exports = [{
  path: '/user',
  method: 'POST',
  handler: createUserHandler,
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        email: Joi.string().required(),
      },
    },
  },
}];
