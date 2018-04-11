import gql from 'graphql-tag'

export default gql`
   {

    allNotifications {
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
