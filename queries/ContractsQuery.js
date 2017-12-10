import gql from 'graphql-tag'

export default gql`
query contracts {
  loggedUser {
    id
    email
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
