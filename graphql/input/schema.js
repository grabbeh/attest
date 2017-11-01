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
  createdAt: Date
  lastUpdated: Date
  currentStatus: String
  statuses: [Status]
  client: Boolean
  supplier: Boolean
  assignedTo: Lawyer
}

type Status {
  status: String
  date: Date
}

type Lawyer {
  id: ID!
  firstName: String
  lastName: String
}

schema {
  query: Query
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
