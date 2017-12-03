import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schemas/schema'
import jwt from 'jsonwebtoken'
const GRAPHQL_PORT = 8000

const server = express()

const SECRET = 'fdsferwerwr3434534ttregnkgwqeqd'

const addUser = async (req, res) => {
  const token = req.headers['authorization']
  try {
    const { user } = await jwt.verify(token, SECRET)
    req.user = user
  } catch (error) {
    // console.log(error)
  }
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
