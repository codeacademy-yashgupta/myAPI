const getUserHandler = require('./../handlers/getUserHandler');

module.exports = [{
  path: '/user',
  method: 'GET',
  handler: getUserHandler,

}];
