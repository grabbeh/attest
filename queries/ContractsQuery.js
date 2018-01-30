import gql from 'graphql-tag'

export default gql`
query contracts($masterEntityID: String) {
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
  contracts(masterEntityID: $masterEntityID) {
    masterEntityID
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
