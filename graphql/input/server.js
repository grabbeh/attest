import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schemas/schema'
import jwt from 'jsonwebtoken'
import SECRET from '../../config/jwt-secret.js'

const GRAPHQL_PORT = 8000
const server = express()

const addUser = async (req, res) => {
  let token = req.headers['authorization'] || null
  try {
    const { user } = await jwt.verify(token, SECRET)
    req.user = user
    req.session.user = user
    // ADD FULL USER INFORMATION TO SESSION THROUGH DB CALL?
  } catch (error) {}
  req.next()
}

server.use(addUser)
server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: {
      SECRET,
      user: req.user
    }
  }))
)
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
server.listen(GRAPHQL_PORT)
