import NotificationsContainer
  from '../components/notifications/NotificationsContainer'
import { AuthPage } from '../components/Page'

const NotificationsPage = AuthPage(props => (
  <NotificationsContainer {...props} />
))

export default NotificationsPage
