import { Mutation } from 'react-apollo'
import DEACTIVATE_NOTIFICATION_MUTATION
  from '../../queries/DeactivateNotificationMutation'
import ACTIVE_NOTIFICATIONS_QUERY from '../../queries/ActiveNotificationsQuery'
import _ from 'lodash'

const DeleteNotification = ({ id }) => (
  <Mutation
    mutation={DEACTIVATE_NOTIFICATION_MUTATION}
    update={(cache, { data: { deactivateNotification } }) => {
      const { activeNotifications } = cache.readQuery({
        query: ACTIVE_NOTIFICATIONS_QUERY
      })
      let { id } = deactivateNotification
      const revised = _.without(
        activeNotifications,
        _.find(activeNotifications, { id })
      )
      cache.writeQuery({
        query: ACTIVE_NOTIFICATIONS_QUERY,
        data: { activeNotifications: revised }
      })
    }}
  >
    {(deactivateNotification, { data }) => (
      <div
        onClick={e => {
          e.preventDefault()
          deactivateNotification({ variables: { id } })
        }}
      >
        <i className='fa fa-times' />
      </div>
    )}

  </Mutation>
)

export default DeleteNotification
