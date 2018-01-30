import gql from 'graphql-tag'

export default gql`
mutation createAdminAccount($masterEntity: String!, $email: String!, $password: String!) {
  createAdminAccount(masterEntity: $masterEntity, email: $email, password: $password) 
}
`
