import { Component } from 'react'
import { Mutation } from 'react-apollo'
import UPDATE_NOTIFICATION_MUTATION
  from '../../queries/UpdateNotificationMutation'
import NOTIFICATIONS_QUERY from '../../queries/NotificationsQuery'
import _ from 'lodash'

class Notification extends Component {
  render () {
    let { notification } = this.props
    let { relatedUser, action } = notification

    return (
      <div className='pa3 f4 mr3 mb3 bg-light-gray'>
        <div>{`${relatedUser.name} ${action}`}</div>

        <div>Go to contract</div>
        <Mutation
          mutation={UPDATE_NOTIFICATION_MUTATION}
          update={(cache, { data: { updateNotification } }) => {
            const data = cache.readQuery({ query: NOTIFICATIONS_QUERY })
            let copy = data.allNotifications
            let { id } = updateNotification
            const revisedNotifications = _.without(copy, _.find(copy, { id }))
            data.allNotifications = revisedNotifications
            cache.writeQuery({ query: NOTIFICATIONS_QUERY, data })
          }}
        >
          {(updateNotification, { data }) => (
            <div
              onClick={e => {
                e.preventDefault()
                updateNotification({ variables: { id: notification.id } })
              }}
            >
              Delete notification
            </div>
          )}

        </Mutation>

      </div>
    )
  }
}

export default Notification
