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
    return reply('Hello Hapi!');
  }
});

// register plugin
server.register([{
    register: require('./plugins/hello'),
    options: { message: 'Greetings from the options message.'}
  }, require('./plugins/dep')], {
    routes: {
      prefix: '/v1'
    }
  }, (err) => {
    if (err) {
      throw err;
    }

    // start the server
    server.start((err) => {
      if (err) {
        throw err;
      }

      console.log('server running on: ', server.info.uri);

    });

});


