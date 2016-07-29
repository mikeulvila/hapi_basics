'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/plugin',
    handler: (request, reply) => {
      return reply('Hello from the hello plugin!');
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'hello'
};
