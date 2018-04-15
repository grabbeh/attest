import NotificationsHolder from './NotificationsHolder'
import { Query } from 'react-apollo'
import Loading from '../general/Loading'
import NOTIFICATIONS_QUERY from '../../queries/NotificationsQuery'
// import UPDATE_NOTIFICATION_MUTATION from '../../queries/UpdateNotificationQuery'
import FadeRightDiv from '../styles/FadeRightDiv'

const NotificationsContainer = () => (
  <Query query={NOTIFICATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return 'Error'
      return <FadeRightDiv><NotificationsHolder {...data} /></FadeRightDiv>
    }}
  </Query>
)

export default NotificationsContainer
