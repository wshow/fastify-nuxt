const { Nuxt, Builder } = require('nuxt')

module.exports = function (fastify, options, next) {
    const dev = process.env.NODE_ENV !== 'production'
    const nuxt = new Nuxt(Object.assign(
        {}, 
        { dev },
        options))

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

    // function run() {
    //     fastify.decorate('next', route.bind(fastify))
    //     next()
    // }

    // function route(path, opts, callback) {
    //     opts = opts || {}
    //     if (typeof opts === 'function') {
    //       callback = opts
    //       opts = {}
    //     }
    
    //     assert(typeof path === 'string', 'path must be a string')
    //     if (opts.method) assert(typeof opts.method === 'string', 'options.method must be a string')
    //     if (opts.schema) assert(typeof opts.schema === 'object', 'options.schema must be an object')
    //     if (opts.next) assert(typeof opts.next === 'object', 'options.next must be an object')
    //     if (callback) assert(typeof callback === 'function', 'callback must be a function')
    
    //     const method = opts.method || 'get'
    //     this[method.toLowerCase()](path, opts, handler)
    
    //     function handler (req, reply) {
    //       if (callback) {
    //         return callback(nuxt, req, reply)
    //       }
          
    //       nuxt.render(req.req, reply.res)
    //     }
    // }
}