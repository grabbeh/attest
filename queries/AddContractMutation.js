import gql from 'graphql-tag'

export default gql`
  mutation addContract($contract: PostContract) {
    addContract(contract: $contract) {
      id
      executionDate
      effectiveDate
      expiryDate
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
        color
      }
      businessUnit {
        name
        color
      }
      assignedTo {
        name
        email
        id
        acceptedInvite
      }
      favourite
      comments {
        text
        createdAt
        updatedAt
      }
    }
  }
`
