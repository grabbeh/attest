import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'

const GRAPHQL_PORT = 8000

const server = express()

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(GRAPHQL_PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`)
)
