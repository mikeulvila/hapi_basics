'use strict';

const Hapi = require('hapi');

// hapi server and connection
const server = new Hapi.Server();
server.connection({
  port: 3000
});

// define prerequisite
const pre1 = (request, reply) => {
  return reply('Hello from the pre1');
}

// creating routes
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply(request.pre.m1);
  },
  config: {
    pre: [
      { method: pre1, assign: 'm1'}
    ]
  }
});

// start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('server running on: ', server.info.uri);

});
