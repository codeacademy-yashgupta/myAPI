const Hapi = require('hapi');
const routes = require('./src/routes/ping');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

server.route(routes);
server.start();
console.log('Server started successfully');
module.exports = server;
