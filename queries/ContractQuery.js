import gql from 'graphql-tag'

export default gql`
  query contract($id: ID!) {
    contract(id: $id) {
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
        name
        email
        id
      }
      favourite
      comments {
        text
        createdAt
        updatedAt
        author
      }
    }
    notificationsForContract(id: $id) {
      action
      createdAt
      changes {
        attr
        added {
          name
          color
          date
          email
        }
        removed {
          name
          color
          date
          email
        }
      }
      id
      relatedContract {
        id
        favourite
        externalParties
      }
      relatedUser {
        name
      }
    }
  }
`
