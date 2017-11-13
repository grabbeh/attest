const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const proxy = require('http-proxy-middleware')

let GRAPHQL_SERVER = 'http://localhost:8000/graphql'
/* if (process.env.NODE_ENV === 'production') {
  GRAPHQL_SERVER = 'http://207.154.247.21:8000/graphql'
  // GRAPHQL_SERVER = 'http://tryattest.com/8000/graphql'
} */

app.prepare().then(() => {
  const server = express()
  server.use(
    '/graphql',
    proxy({
      target: GRAPHQL_SERVER,
      changeOrigin: true
    })
  )

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3000)
})
