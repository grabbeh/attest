import { graphql, compose } from 'react-apollo'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'
import Loading from '../general/Loading'

const ContractsContainer = props => {
  if (!props.loading) return <ContractsHolder {...props} />
  return <Loading />
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
      currentLawyers,
      allUsers
    }
  }) => ({
    loading,
    masterEntity,
    contracts,
    currentTags,
    currentLawyers,
    currentBusinessUnits,
    currentStatuses,
    allUsers
  })
})

const ContractsContainerWithQuery = compose(ContractsQuery)(ContractsContainer)

export default ContractsContainerWithQuery
