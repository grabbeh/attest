import gql from 'graphql-tag'

export default gql`
mutation updateContract($contract: PostContractWithID) {
  updateContract(contract: $contract) {
    internalParties
    externalParties
    id
    executionDate
    effectiveDate
    expiryDate
    currentStatus {
      name 
      color
      date
    }
    statuses {
      name
      color
      date
    }
    tags {
      name
      color
    }
    businessUnit {
      name
      color
    }
    assignedTo {
      firstName
      lastName
      id
    }
  }
}
`
