import { gql } from 'react-apollo'

export default gql`
mutation updateContract($id: ID!) {
  updateContract(id: $id) {
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
    }
  }
}
`
