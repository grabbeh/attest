import { Contract } from './connectors'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue (value) {
      return new Date(value) // value from the client
    },
    serialize (value) {
      return value.getTime() // value sent to the client
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10) // ast value is always in string format
      }
      return null
    }
  }),
  Query: {
    contracts (root, args) {
      return Contract.find()
    }
  }
}

const fromMongo = item => {
  return {
    ...item,
    id: item._id.toString()
  }
}

export default resolvers
