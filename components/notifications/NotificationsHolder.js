import Title from '../styles/Title'
import Notification from './Notification'
import Text from '../styles/Text'

const NotificationsHolder = props => (
  <div className='pa3-ns pa0 pt3'>
    <Title text='Notifications' />
    <Text>Total {props.allNotifications.length}</Text>
    {props.allNotifications.map((notification, index) => (
      <Notification key={index} notification={notification} />
    ))}
  </div>
)

export default NotificationsHolder
