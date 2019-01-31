const pingRoute = require('./ping');
const createUserRoute = require('./createUserRoute');
const getUserRoute = require('./getUserRoute');

module.exports = [
  ...pingRoute,
  ...createUserRoute,
  ...getUserRoute,
];
