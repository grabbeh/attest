import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import cors from 'cors'

const GRAPHQL_PORT = 8000

const whitelist = [
  'http://localhost:3000',
  'http://tryattest.com:3000',
  'http://207.154.247.21:3000/graphql'
]
const corsOptions = {
  origin (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

const server = express()

// server.use(cors(corsOptions))
// server.use('*', cors(corsOptions))
/*
server.use('/graphql', function (req, res, next) {
  console.log('Server hit')
  // console.log(req.method)
  res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  if (req.method === 'OPTIONS') {
    // console.log('Method = OPTIONS')
    res.sendStatus(200)
  } else {
    next()
  }
}) */

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: schema, context: {} })
)
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
server.listen(GRAPHQL_PORT)
