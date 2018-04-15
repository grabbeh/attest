import NotificationsHolder from './NotificationsHolder'
import { Query } from 'react-apollo'
import Loading from '../general/Loading'
import ACTIVE_NOTIFICATIONS_QUERY from '../../queries/ActiveNotificationsQuery'

import FadeRightDiv from '../styles/FadeRightDiv'

const NotificationsContainer = () => (
  <Query query={ACTIVE_NOTIFICATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return 'Error'
      return <FadeRightDiv><NotificationsHolder {...data} /></FadeRightDiv>
    }}
  </Query>
)

export default NotificationsContainer
