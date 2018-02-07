import gql from 'graphql-tag'

export default gql`
query contracts {
  contracts {
    id
    expiryDate
    internalParties
    externalParties
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
    currentStatus {
      name
      color
      date
    }
    assignedTo {
      firstName
      lastName
      id
    }
  }
  currentTags 
  currentStatuses
  currentBusinessUnits
  currentLawyers
  masterEntity {
    name
    businessUnits {
      name
    }
    statuses {
      name
      color
    }
    tags {
      name
    }
    lawyers
  }
}
`
