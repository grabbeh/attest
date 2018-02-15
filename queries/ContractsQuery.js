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
      color
    }
    businessUnit {
      name
      color
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
  currentTags {
    name
    color
  }
  currentStatuses {
    name
    color
  }
  currentBusinessUnits {
    name
    color
  }
  currentLawyers
  masterEntity {
    name
    businessUnits {
      name
      color
    }
    statuses {
      name
      color
    }
    tags {
      name
      color
    }
    lawyers
  }
}
`
