import gql from 'graphql-tag'

export default gql`
  query  {
    allUsers {
      name
      email
      id
      masterEntityID
      acceptedInvite
    }
    masterEntity {
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
  }
}
`
