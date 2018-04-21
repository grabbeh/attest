import Title from '../styles/Title'
import Notification from './Notification'
import Text from '../styles/Text'
import { Component } from 'react'
import Box from '../styles/Box'

class NotificationsHolder extends Component {
  render () {
    return (
      <Box>
        <div className='mw7 center'>
          <Title text='Notifications' />
          {!this.props.notifications.length > 0 &&
            <Text>No notifications!</Text>}
          {this.props.notifications.map((notification, index) => (
            <Notification key={index} deleteButton {...notification} />
          ))}
        </div>
      </Box>
    )
  }
}

export default NotificationsHolder
