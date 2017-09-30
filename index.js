const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const moduleAlias = require('module-alias')
moduleAlias.addAlias('react', 'preact-compat')
moduleAlias.addAlias('react-dom', 'preact-compat')

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3000)
})
