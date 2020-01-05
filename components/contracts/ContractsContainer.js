import { useQuery } from '@apollo/react-hooks'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ContractsHolder from './ContractsHolder'
import Loading from '../general/Loading'
import FadeRightDiv from '../styles/FadeRightDiv'

const ContractsContainer = () => {
  const { loading, error, data } = useQuery(CONTRACTS_QUERY)
  if (loading) return <Loading />
  if (error) return 'Error'
  return (
    <FadeRightDiv>
      <ContractsHolder {...data} />
    </FadeRightDiv>
  )
}
export default ContractsContainer
