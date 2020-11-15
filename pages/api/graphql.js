import { ApolloServer } from 'apollo-server-micro'
import resolvers from '../../server/resolvers.js'
import typeDefs from '../../server/schemas/schema.js'
import { User } from '../../server/connectors.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

const checkForUser = async authorisationHeader => {
  // FIREFOX HEADERS ARE 'UNDEFINED' WHEN LOGGED OUT. CHROME IS JUST EMPTY SO DO A CHECK FOR BOTH
  let token = authorisationHeader || null
  if (token === undefined) {
    token = null
  }
  if (token) {
    try {
      // is string when derived from token but not when from DB which causes issues with filter
      const { user } = jwt.verify(token, process.env.JWT_SECRET)
      let fullUser = await User.findById(user._id)
      return fullUser
    } catch (error) {
      console.log(error)
      return {}
    }
  } else {
    return null
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ctx => {
    return {
      user: await checkForUser(ctx.req.headers['authorization'])
    }
  }
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
