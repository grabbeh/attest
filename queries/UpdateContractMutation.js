import gql from 'graphql-tag'

export default gql`
mutation updateContract($id: ID!, $contract: PostContractWithID) {
  updateContract(id: $id, contract: $contract) {
    ownerEntity
    id
    internalParties
    externalParties
    currentStatus
    statuses {
      status
      date
    }
    tags
    businessUnit
    currentStatus
    assignedTo {
      firstName
      lastName
      id
    }
  }
}
`
