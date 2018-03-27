import Title from '../styles/Title'

const NotificationsHolder = props => (
  <div className='pa3-ns pa0 pt3'>
    <Title text='Notifications' />
    {props.allNotifications.map(n => <div>{n.action}</div>)}
  </div>
)

export default NotificationsHolder
