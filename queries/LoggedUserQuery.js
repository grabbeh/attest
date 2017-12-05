import gql from 'graphql-tag'

export default gql`
query loggedUser {
  loggedUser {
    id
  }
}
`
