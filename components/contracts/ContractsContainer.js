import { graphql, compose } from 'react-apollo'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'
import Loading from '../general/Loading'

const ContractsContainer = props => {
  if (props.loading) return <Loading />
  else return <ContractsHolder {...props} />
}

const ContractsQuery = graphql(CONTRACTS_QUERY, {
  props: ({
    data: {
      loading,
      masterEntity,
      contracts,
      currentStatuses,
      currentTags,
      currentBusinessUnits,
      currentLawyers
    }
  }) => ({
    loading,
    masterEntity,
    contracts,
    currentTags,
    currentLawyers,
    currentBusinessUnits,
    currentStatuses
  })
})

const ContractsContainerWithQuery = compose(ContractsQuery)(ContractsContainer)

export default ContractsContainerWithQuery
