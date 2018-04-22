import { Component } from 'react'
import { Query } from 'react-apollo'
import USER_QUERY from '../../queries/UserQuery'
import FadeRightDiv from '../styles/FadeRightDiv'
import Loading from '../general/Loading'
import InviteHolder from './InviteHolder'
import CenterBox from '../styles/CenterBox'

class InviteContainer extends Component {
  render () {
    let id = this.props.url.query.id
    return (
      <Query query={USER_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return 'Error'
          if (data.user.acceptedInvite) return 'Existing user'
          return (
            <FadeRightDiv>
              <CenterBox><InviteHolder {...data} /></CenterBox>
            </FadeRightDiv>
          )
        }}
      </Query>
    )
  }
}

export default InviteContainer
