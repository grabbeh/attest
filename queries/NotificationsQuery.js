import gql from 'graphql-tag'

export default gql`
  query  {
    allNotifications {
      action
      relatedUser
      relatedContract 
    }
}
`
