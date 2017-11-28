import { graphql } from 'react-apollo'
import ContractsQuery from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'

const ContractsData = graphql(ContractsQuery, {
  props: ({ data }) => ({
    data
  })
})(ContractsHolder)

export default ContractsData
