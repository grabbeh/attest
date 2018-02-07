import gql from 'graphql-tag'

export default gql`
mutation updateContract($contract: PostContractWithID) {
  updateContract(contract: $contract) {
    masterEntityID
    id
    internalParties
    externalParties
    currentStatus
    statuses {
      color
      name
      date
    }
    tags {
      name
    }
    businessUnit {
      name
    }
    currentStatus
  }
}
`
