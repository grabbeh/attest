import { graphql, compose, Query } from 'react-apollo'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'
import Loading from '../general/Loading'
import FadeRightDiv from '../styles/FadeRightDiv'

const ContractsContainer = () => (
  <Query query={CONTRACTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return 'Error'
      return <FadeRightDiv><ContractsHolder {...data} /></FadeRightDiv>
    }}
  </Query>
)
export default ContractsContainer
