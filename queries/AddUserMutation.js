import gql from 'graphql-tag'

export default gql`
mutation addUser($user: PostUser) {
  addUser(user: $user) {
    id
    name
    email
  }
}
`
