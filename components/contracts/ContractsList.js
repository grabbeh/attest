import { gql, graphql } from 'react-apollo'
import ContractSubList from './ContractSubList'
import _ from 'underscore'

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
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ContractsList)
export default graphql(contracts, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(ContractSubList)
