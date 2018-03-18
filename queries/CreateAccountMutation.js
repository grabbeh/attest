import gql from 'graphql-tag'

export default gql`
mutation createInitialAccount($name: String!, $email: String!, $password: String!) {
  createInitialAccount(name: $name, email: $email, password: $password) 
}
`
