import gql from 'graphql-tag'

export default gql`
mutation updateNotification($id: String) {
  updateNotification(id: $id) {
    id
  }
}
`
