import gql from 'graphql-tag'

export default gql`
  query user($id: ID) {
    user(id: $id) {
      id
      email
      acceptedInvite
    }
  }
`
