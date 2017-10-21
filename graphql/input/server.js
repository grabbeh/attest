import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import cors from 'cors'
// import config from '../config/db'
// import database from './db'

/* const db = mongoose.connect('mongodb://grabbeh:everton@207.154.247.21/test')
console.log(db)
const context = { db }
context.db = db */

const GRAPHQL_PORT = 8000

const whitelist = [
  // Allow domains here
  'http://localhost:3000'
]
const corsOptions = {
  origin (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

const server = express()
server.use(cors(corsOptions))
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
