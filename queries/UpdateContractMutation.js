import { gql } from 'react-apollo'

export default gql`
mutation updateContract($id: ID!, $contract: PostContractWithID) {
  updateContract(id: $id, contract: $contract) {
    id
  }
}
`
