import gql from 'graphql-tag'

export default gql`
query contracts {
  statuses {
    name
  }
  lawyers {
    firstName
    lastName
    id
  }
  tags {
    name
  }
  contracts {
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
