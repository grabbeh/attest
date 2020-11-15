import gql from 'graphql-tag'

export default gql`
  mutation deactivateNotification($id: String) {
    deactivateNotification(id: $id) {
      id
    }
  }
`
