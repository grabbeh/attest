import { gql } from 'react-apollo'

export default gql`
query contracts {
  contracts {
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
