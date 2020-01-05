import { Query } from 'react-apollo'
import CONTRACT_QUERY from '../../queries/ContractQuery'
import FadeRightDiv from '../styles/FadeRightDiv'
import Loading from '../general/Loading'
import ContractHolder from './ContractHolder'

const ContractContainer = props => {
  let id = props.router.query.id
  return (
    <Query query={CONTRACT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <Error />
        return (
          <FadeRightDiv>
            <ContractHolder user={props.user} {...data} />
          </FadeRightDiv>
        )
      }}
    </Query>
  )
}

export default ContractContainer
