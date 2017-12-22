import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers'

const typeDefs = `
type Query {
  contracts: [Contract]
  contract(id: ID!): Contract
  allStatuses: [StatusCategories]
  allLawyers: [Lawyer]
  allTags: [Tag]
  allUsers: [User]
  allBusinessUnits: [BusinessUnit]
  allCustomerEntities: [CustomerEntity]
  loggedUser: User
}

type Mutation {
  addContract(contract: PostContract): Contract
  updateContract(id: ID!, contract: PostContractWithID): Contract
  deleteContract(id: ID!): Contract
  deleteUser(email: String!): User
  register(email: String!, password: String!, parentEntity: String!): User!
  login(email: String!, password: String!): String
}

type CustomerEntity {
  id: ID!
  name: String!
}

type User {
  id: ID!
  email: String!
  parentEntity: String!
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
  ownerEntity: String
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

type StatusCategories {
  id: ID!
  name: String
}

type Contract {
  id: ID!
  ownerEntity: String
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

type Tag {
  name: String
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

type BusinessUnit {
  id: Int
  name: String
}

input BusinessUnitInput {
  id: Int
  name: String
}

schema {
  query: Query
  mutation: Mutation
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
