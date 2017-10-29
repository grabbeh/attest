import { gql, graphql } from 'react-apollo'
import ContractSubList from './ContractSubList'

const contracts = gql`
  query {
    contracts {
      id
      internalParties
      externalParties
      effectiveDate
      status
      tags
      businessUnit
      assignedTo{
        firstName
        lastName
      }
    }
  }
`
export default graphql(contracts, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(ContractSubList)
