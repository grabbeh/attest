import gql from 'graphql-tag'

export default gql`
  {
    activeNotifications {
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
      unseen
      relatedContract {
        id
        favourite
        externalParties
      }
      relatedUser {
        email
        name
      }
    }
  }
`
