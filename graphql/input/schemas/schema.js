import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers'

const typeDefs = `
type Query {
  contracts: [Contract]
  contract(id: ID!): Contract
  masterEntity: MasterEntity
  allUsers: [User]
  user: User
  currentTags: [String]
  currentBusinessUnits: [String]
  currentLawyers: [String]
  currentStatuses: [String]
}

type Mutation {
  addContract(contract: PostContract): Contract
  updateContract(contract: PostContractWithID): Contract
  deleteContract(id: ID!): Contract
  deleteUser(email: String!): User
  addUser(email: String!): User
  createAdminAccount(name: String!, email: String!, password: String!): String
  updateMasterEntity(masterEntity: PostMasterEntity): MasterEntity
  login(email: String!, password: String!): String
}

type MasterEntity {
  id: ID
  name: String
  businessUnits: [BusinessUnit]
  tags: [Tag]
  lawyers: [String]
  statuses: [Status]
  relatedEntities: [String]
}

input PostMasterEntity {
  name: String
  businessUnits: [BusinessUnitInput]
  tags: [TagInput]
  lawyers: [String]
  statuses: [StatusInput]
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
  tags: [TagInput]
  businessUnit: BusinessUnitInput
  createdAt: Date
  lastUpdated: Date
  currentStatus: ContractStatusInput
  statuses: [ContractStatusInput]
  client: Boolean
  supplier: Boolean
  assignedTo: LawyerInput
}

input PostContractWithID {
  id: ID
  internalParties: [String]
  externalParties: [String]
  executionDate: Date
  effectiveDate: Date
  expiryDate: Date
  rollingTerm: Boolean
  tags: [TagInput]
  businessUnit: BusinessUnitInput
  createdAt: Date
  lastUpdated: Date
  currentStatus: ContractStatusInput
  statuses: [ContractStatusInput]
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
  masterEntityID: String
  internalParties: [String]
  externalParties: [String]
  executionDate: Date
  effectiveDate: Date
  expiryDate: Date
  rollingTerm: Boolean
  tags: [Tag]
  businessUnit: BusinessUnit
  createdAt: Date
  lastUpdated: Date
  currentStatus: ContractStatus
  statuses: [ContractStatus]
  client: Boolean
  supplier: Boolean
  assignedTo: Lawyer
}

input ContractStatusInput {
  name: String
  date: Date
  color: String
}

type ContractStatus {
  name: String
  date: Date
  color: String
}

input StatusInput {
  name: String
  color: String
}

type Status {
  name: String
  color: String
}

type Tag {
  name: String
}

input TagInput {
  name: String
}

type BusinessUnit {
  name: String
}

input BusinessUnitInput {
  name: String
}

type Lawyer {
  firstName: String
  lastName: String
  id: String
}

input LawyerInput {
  firstName: String
  lastName: String
  id: String
}

schema {
  query: Query
  mutation: Mutation
 }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
