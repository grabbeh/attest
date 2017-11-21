import { graphql } from 'react-apollo'
import ContractsQuery from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'

export default graphql(ContractsQuery, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(ContractsHolder)
