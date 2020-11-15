import gql from 'graphql-tag'

export default gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      name
    }
  }
`
