import gql from 'graphql-tag'

export default gql`
mutation addContract($contract: PostContract) {
  addContract(contract: $contract) {
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
