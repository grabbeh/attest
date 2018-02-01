import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers'

const typeDefs = `
type Query {
  contracts(masterEntityID: String): [Contract]
  contract(id: ID!): Contract
  masterEntity(masterEntityID: String): MasterEntity
  allMasterEntities: [MasterEntity]
  allUsers: [User]
  user: User
}

type Mutation {
  addContract(contract: PostContract): Contract
  updateContract(id: ID!, contract: PostContractWithID): Contract
  deleteContract(id: ID!): Contract
  deleteUser(email: String!): User
  addUser(email: String!): User
  createAdminAccount(name: String!, email: String!, password: String!): String
  updateMasterEntity(id: ID!, masterEntity: PostMasterEntity): MasterEntity
  login(email: String!, password: String!): String
}

type MasterEntity {
  id: ID!
  name: String!
  businessUnits: [String]
  tags: [String]
  lawyers: [String]
  statuses: [String]
  relatedEntities: [String]
}

input PostMasterEntity {
  id: ID!
  name: String
  businessUnits: [String]
  tags: [String]
  lawyers: [String]
  statuses: [String]
  relatedEntities: [String]
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
