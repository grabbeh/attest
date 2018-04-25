import { Component } from 'react'
import { Query } from 'react-apollo'
import CONTRACT_QUERY from '../../queries/ContractQuery'
import FadeRightDiv from '../styles/FadeRightDiv'
import Loading from '../general/Loading'
import ContractHolder from './ContractHolder'

class ContractContainer extends Component {
  render () {
    let id = this.props.url.query.id
    return (
      <Query query={CONTRACT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error />
          return <FadeRightDiv><ContractHolder {...data} /></FadeRightDiv>
        }}
      </Query>
    )
  }
}

export default ContractContainer
