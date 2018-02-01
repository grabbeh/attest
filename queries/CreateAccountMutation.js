import gql from 'graphql-tag'

export default gql`
mutation createAdminAccount($name: String!, $email: String!, $password: String!) {
  createAdminAccount(name: $name, email: $email, password: $password) 
}
`
