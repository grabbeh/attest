import gql from 'graphql-tag'

export default gql`
mutation updateContract($contract: PostContractWithID) {
  updateContract(contract: $contract) {
    internalParties
    externalParties
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
    }
    businessUnit {
      name
    }
    assignedTo {
      firstName
      lastName
      id
    }
  }
}
`
