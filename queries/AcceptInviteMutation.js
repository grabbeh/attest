import gql from 'graphql-tag'

export default gql`
  mutation acceptInvite($user: PostUser) {
    acceptInvite(user: $user) {
      id
      acceptedInvite
    }
  }
`
