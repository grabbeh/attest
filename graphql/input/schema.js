import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Query {
  contracts: [Contract]
  contract(id: ID!): Contract
}

type Mutation {
  addContract(input: PostContract!): Contract
  updateContract(input: PostContractWithID!): Contract
  deleteContract(id: ID!): Contract
}

input PostContract {
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
  statuses: [StatusInput]
  client: Boolean
  supplier: Boolean
  assignedTo: LawyerInput
}

input PostContractWithID {
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
  statuses: [StatusInput]
  client: Boolean
  supplier: Boolean
  assignedTo: LawyerInput
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

input StatusInput {
  status: String
  date: Date
}

type Lawyer {
  id: Int
  firstName: String
  lastName: String
}

input LawyerInput {
  id: Int
  firstName: String
  lastName: String
}

schema {
  query: Query
  mutation: Mutation
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
