import gql from 'graphql-tag'

export default gql`
query contracts {
  loggedUser {
    id
    email
    parentEntity
  }
  allStatuses {
    name
  }
  allLawyers {
    firstName
    lastName
    id
  }
  allTags {
    name
  }
  allBusinessUnits {
    name
  }
  contracts {
    ownerEntity
    id
    expiryDate
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
