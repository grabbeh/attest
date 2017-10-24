import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Query {
  contracts: [Contract]
}
scalar Date
type MyType {
   created: Date
}

type Contract {
  id: ID!
  internalParties: [String]
  externalParties: [String]
  executionDate: Date
  effectiveDate: Date
  expiryDate: Date
  rollingTerm: Boolean
  tags: [String]
  businessUnit: String
  status: String
  createdAt: Date
  lastUpdated: Date
  status: String
  client: Boolean
  supplier: Boolean
  assignedTo: String
}

schema {
  query: Query
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
