'use strict';

const Hapi = require('hapi');

// hapi server and connection
const server = new Hapi.Server();
server.connection({
  port: 3000
});

// creating routes
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply("Hello Hapi World!");
  }
});

// start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('server running on: ', server.info.uri);

});
