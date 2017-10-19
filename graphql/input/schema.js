import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Query {
  contracts: [Contract]
}

type Contract {
  name: String
  id: Int
  subject: String
}

schema {
  query: Query
 }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
