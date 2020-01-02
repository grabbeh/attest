const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const production = process.env.NODE_ENV == 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const proxy = require('http-proxy-middleware')
const compression = require('compression')

const GRAPHQL_SERVER = 'http://localhost:8000/'

const setCustomHeaderFunc = function (req, res, next) {
  res.set('SpecialCustomHeader', 'super-awesome-value')
  next()
}

app.prepare().then(() => {
  const server = express()
  if (production) {
    server.use(compression())
    server.use('*', setCustomHeaderFunc)
  }

  // proxy graphql requests from client through to server (avoiding CORS issues (I think))
  const newProxy = proxy({
    target: GRAPHQL_SERVER,
    changeOrigin: true
  })

  server.use('/graphql', newProxy)

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3000)
})
