const fastify = require('fastify')({ logger: true })
fastify.register(require('@fastify/cors'), {});

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/registro', require('./src/registro'));
fastify.post('/ingreso', require('./src/ingreso'));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()