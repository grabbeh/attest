import { gql, graphql } from 'react-apollo'
import ContractsHolder from './ContractsHolder'

const contracts = gql`
  query {
    contracts {
      id
      internalParties
      externalParties
      currentStatus
      statuses {
        status
        date
      }
      tags
      businessUnit
      currentStatus
      assignedTo {
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
})(ContractsHolder)
