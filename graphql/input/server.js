import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import cors from 'cors'

const GRAPHQL_PORT = 8000

const whitelist = ['http://localhost:3000', 'http://tryattest.com']
const corsOptions = {
  origin (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type,token')
  next()
}

const server = express()
server.options('*', cors())
server.use(allowCrossDomain)
server.use(cors(corsOptions))
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
