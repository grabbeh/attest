import gql from 'graphql-tag'

export default gql`
mutation updateUser($user: PostUserWithID) {
  updateUser(user: $user) {
    id
    name
    email
    favourites
  }
}
`
