require('dotenv').config()
const Port = process.env.PORT
const uri = process.env.MONGODB_URI
const path = require('path')
const fastify = require('fastify')({ logger: true })
const main = require('./server/nodemailer/nodemailer')
const db = require('./server/mongoose/Conection')

const routes = {
  email: require('./server/routes/email'),
  root: require('./server/routes/root')
}

fastify.register(db, { uri })
fastify.register(routes.email)
fastify.register(routes.root)
fastify.register(require('fastify-cors'), {
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, './.nuxt'),
  prefix: '/' // optional: default '/'
})
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

// fastify.get('/', async (request, reply) => {
//   return 'hui'
// })

fastify.get('/test1', async (request, reply) => {
  // consola.info(request, reply)
  return { project }
})

fastify.get('/another/path', async function (req, reply) {
  const result = await main()
  console.log(result, 'result')
  return reply.sendFile('/views/error.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})
//
// fastify.get('/path/with/different/root', function (req, reply) {
//   return reply.sendFile('myHtml.html', path.join(__dirname, 'build')) // serving a file from a different root location
// })
//
// fastify.get('/another/path', function (req, reply) {
//   return reply.sendFile('myHtml.html', { cacheControl: false }) // overriding the options disabling cache-control headers
// })

// fastify.get('/test2', async (req, res) => {
//   // eslint-disable-next-line node/no-path-concat
//   res.sendFile(__dirname + '/.nuxt/views/error.html')
// })

console.log('Run the server!')
const start = async () => {
  try {
    console.log(1)
    await fastify.listen(Port)
    console.log(2)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
