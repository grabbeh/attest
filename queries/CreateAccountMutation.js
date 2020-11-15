import gql from 'graphql-tag'

export default gql`
  mutation createInitialAccount(
    $name: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createInitialAccount(
      name: $name
      userName: $userName
      email: $email
      password: $password
    ) {
      name
    }
  }
`
