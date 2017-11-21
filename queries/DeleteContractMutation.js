import { gql } from 'react-apollo'

export default gql`
mutation deleteContract($id: ID!) {
  deleteContract(id: $id) {
    id
  }
}
`
