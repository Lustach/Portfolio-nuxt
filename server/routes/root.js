const fp = require('fastify-plugin')
const root = async (server, opts) => {
  // console.log(server, 'server')
  server.route({
    url: '/',
    logLevel: 'warn',
    method: ['GET'],
    handler: async (request, reply) => {
      reply.send({ date: new Date(), status: 'server is working' })
    }
  })
  // fastify.decorate('db', { models })
}
module.exports = fp(root)

// import fastifyPlugin from 'fastify-plugin'
// import fastifyMongo from 'fastify-mongodb'
//
// async function dbConnector (fastify, options) {
//   fastify.register(fastifyMongo, {
//     url: 'mongodb://localhost:27017/test_database'
//   })
// }
//
// // Wrapping a plugin function with fastify-plugin exposes the decorators
// // and hooks, declared inside the plugin to the parent scope.
// module.exports = fastifyPlugin(dbConnector)
