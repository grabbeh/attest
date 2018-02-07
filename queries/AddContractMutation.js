import gql from 'graphql-tag'

export default gql`
mutation addContract($contract: PostContract) {
  addContract(contract: $contract) {
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
