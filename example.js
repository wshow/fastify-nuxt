const fastify = require('fastify')()
const nuxtConfig = require('./nuxt.config')

fastify.register(require('fastify-nuxt'), nuxtConfig)
fastify.ready()

fastify.listen(3000, () => {
    console.info('> Listening on port 3000')
})