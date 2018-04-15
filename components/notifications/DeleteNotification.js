import { Mutation } from 'react-apollo'
import UPDATE_NOTIFICATION_MUTATION
  from '../../queries/UpdateNotificationMutation'
import NOTIFICATIONS_QUERY from '../../queries/NotificationsQuery'
import _ from 'lodash'

const DeleteNotification = ({ id }) => (
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
          console.log(id)
          e.preventDefault()
          updateNotification({ variables: { id } })
        }}
      >
        <i className='fa fa-times' />
      </div>
    )}

  </Mutation>
)

export default DeleteNotification
