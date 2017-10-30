# fastify-nuxt
[FastifyJS](https://www.fastify.io/) plugin work with [NuxtJS](https://nuxtjs.org/)

## install
```bash
npm install fastify-nuxt --save
```

## Usage
```javascript
const fastify = require('fastify')()

fastify.register(require('fastify-nuxt'))
fastify.ready()

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
```

With `nuxt.config.js`
```javascript
const fastify = require('fastify')()
const nuxtConfig = require('./nuxt.config')

fastify.register(require('fastify-nuxt'), nuxtConfig)
fastify.ready()

fastify.listen(3000, () => {
    console.info('> Listening on port 3000')
})
```

All pages are store in `pages` directory, you can see more in [documentation](https://nuxtjs.org/guide/directory-structure) .
```html
<!--  pages/index.vue -->
<template>
  <div>
    <h3>Home</h3>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>
```