import gql from 'graphql-tag'

export default gql`
  query {
    unseenNotifications {
      action
    }
  }
`
