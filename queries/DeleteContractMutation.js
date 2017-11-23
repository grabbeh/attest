import gql from 'graphql-tag'

export default gql`
mutation deleteContract($id: ID!) {
  deleteContract(id: $id) {
    id
  }
}
`
