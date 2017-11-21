import { gql } from 'react-apollo'

export default gql`
query contract($id: ID!) {
  contract(id: $id) {
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
