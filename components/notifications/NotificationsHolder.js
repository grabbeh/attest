import Title from '../styles/Title'
import Notification from './Notification'
import Text from '../styles/Text'

const NotificationsHolder = props => (
  <div className='pa3-ns mw7 w-100 center pa0 pt3'>
    <Title text='Notifications' />
    {!props.allNotifications.length > 0 && <Text>No notifications!</Text>}
    {props.allNotifications.map((notification, index) => (
      <Notification key={index} {...notification} />
    ))}
  </div>
)

export default NotificationsHolder
