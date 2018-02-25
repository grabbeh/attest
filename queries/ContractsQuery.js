import gql from 'graphql-tag'

export default gql`
query contracts {
  contracts {
    id
    expiryDate
    effectiveDate
    executionDate
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
    checked
  }
  currentStatuses {
    name
    color
    checked
  }
  currentBusinessUnits {
    name
    color
    checked
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
