const { Nuxt, Builder } = require('nuxt')
const fp = require('fastify-plugin')

function nuxtPlugin (fastify, options, next) {    
    const dev = process.env.NODE_ENV !== 'production'
    const nuxt = new Nuxt(Object.assign({}, { dev }, options))

    fastify.use(nuxt.render)

    if (dev) {
        new Builder(nuxt).build()
        .then(next)
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
    }
    else {
        next()
    }
}

module.exports = fp(nuxtPlugin)