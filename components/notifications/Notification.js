import { Component } from 'react'
import { Mutation } from 'react-apollo'
import UPDATE_NOTIFICATION_MUTATION
  from '../../queries/UpdateNotificationMutation'
import NOTIFICATIONS_QUERY from '../../queries/NotificationsQuery'
import _ from 'lodash'

class Notification extends Component {
  render () {
    let { notification } = this.props
    let { relatedUser, action, changes, relatedContract } = notification
    console.log(notification)

    return (
      <div className='pa3 f4 mr3 mb3 bg-light-gray'>
        <div>{`${relatedUser.name} ${action}`}</div>
        <div>{relatedContract.externalParties[0]}</div>
        <div>
          {changes.map(c => (
            <div>
              <div>{c.attr}</div><div>{c.added} {c.removed} </div>
              {c.addedObject &&
                c.addedObject.color &&
                <div
                  className='pa2 white'
                  style={{ background: c.addedObject.color }}
                >
                  {c.addedObject.name}
                </div>}
              <div>{c.removedObject && c.removedObject.name}</div>

            </div>
          ))}
        </div>
        <div>Go to contract</div>
        <Mutation
          mutation={UPDATE_NOTIFICATION_MUTATION}
          update={(cache, { data: { updateNotification } }) => {
            const { allNotifications } = cache.readQuery({
              query: NOTIFICATIONS_QUERY
            })
            let { id } = updateNotification
            const revised = _.without(
              allNotifications,
              _.find(allNotifications, { id })
            )
            cache.writeQuery({
              query: NOTIFICATIONS_QUERY,
              data: { allNotifications: revised }
            })
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
