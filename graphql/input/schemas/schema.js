import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers'

const typeDefs = `
type Query {
  contracts(masterEntityID: String): [Contract]
  contract(id: ID!): Contract
  allStatuses: [StatusCategories]
  allLawyers: [Lawyer]
  allTags: [Tag]
  allUsers: [User]
  allBusinessUnits: [BusinessUnit]
  allMasterEntities: [MasterEntity]
  user: User
}

type Mutation {
  addContract(contract: PostContract): Contract
  updateContract(id: ID!, contract: PostContractWithID): Contract
  deleteContract(id: ID!): Contract
  deleteUser(email: String!): User
  addUser(email: String!): User
  createAdminAccount(masterEntity: String!, email: String!, password: String!): String
  login(email: String!, password: String!): String
}

type MasterEntity {
  id: ID!
  name: String!
}

type User {
  id: ID!
  email: String!
  masterEntityID: String!
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
  masterEntityID: String
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
  masterEntityID: String
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
  masterEntityID: String
  name: String
}

type Status {
  masterEntityID: String
  status: String
  date: Date
}

input StatusInput {
  masterEntityID: String
  status: String
  date: Date
}

type Lawyer {
  masterEntityID: String
  firstName: String
  lastName: String
  id: String
}

input LawyerInput {
  masterEntityID: String
  firstName: String
  lastName: String
  id: String
}

type BusinessUnit {
  masterEntityID: String
  name: String
}

input BusinessUnitInput {
  masterEntityID: String
  name: String
}

schema {
  query: Query
  mutation: Mutation
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
