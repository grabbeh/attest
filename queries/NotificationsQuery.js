import gql from 'graphql-tag'

export default gql`
   {

    allNotifications {
      action
      createdAt
      changes {
        attr
        addedObject {
          name
          color
          date
        }
        removedObject {
          name
          color
          date
        }
        added
        removed
      }
      id
      relatedContract {
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
      }
      relatedUser {
        email
        name
      }
    }
}
`
