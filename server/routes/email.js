const fp = require('fastify-plugin')
const main = require('../nodemailer/nodemailer')
const sendEmail = async (server, opts) => {
  server.route({
    url: '/send_email',
    logLevel: 'warn',
    method: ['POST'],
    handler: async (request, reply) => {
      try {
        await main(request.body)
        return reply.send({ message: 'Всё гуд' })
      } catch (e) {
        return reply.send({ message: 'Что-то пошло не так' })
      }
      // reply.send({ date: new Date(), status: 'server is working' })
    }
  })
}
module.exports = fp(sendEmail)

// fastify.post('/send_email', async (request, reply) => {
//   try {
//     console.log(request.body, 'SUKA')
//     const result = await main(request.body)
//     console.log(result, 'result')
//     return reply.send({ message: 'Всё гуд' })
//   } catch (e) {
//     return reply.send({ message: 'Что-то пошло не так' })
//   }
// // reply.send()
// })
