'use strict';

const Hapi = require('hapi');

// hapi server and connection
const server = new Hapi.Server();
server.connection({
  port: 3000
});

// define prerequisite
server.method('m1', (request, reply) => {
  return reply('Hello World');
});

const pre2 = (request, reply) => {
  return reply('from hapi!');
};

const pre3 = (request, reply) => {
  return reply(`${request.pre.m1} ${request.pre.m2}`);
};

// creating routes
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply(request.pre.m3);
  },
  config: {
    pre: [[
      { method: 'm1'},
      { method: pre2, assign: 'm2'}
    ],
      { method: pre3, assign: 'm3'}
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
