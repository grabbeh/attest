import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
const GRAPHQL_PORT = 8000

const server = express()

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: schema, context: {} })
)
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
server.listen(GRAPHQL_PORT)
