import NotificationsHolder from './SettingsHolder'
import { graphql, compose } from 'react-apollo'
import Loading from '../general/Loading'
import NOTIFICATIONS_QUERY from '../../queries/NotificationsQuery'
// import UPDATE_NOTIFICATION_MUTATION from '../../queries/UpdateNotificationQuery'
import FadeRightDiv from '../styles/FadeRightDiv'

const NotificationsContainer = props => {
  if (props.loading) return <Loading />
  else return <FadeRightDiv><NotificationsHolder {...props} /></FadeRightDiv>
}

const NotificationsQuery = graphql(NOTIFICATIONS_QUERY, {
  props: ({ data: { loading, notifications } }) => ({
    loading,
    notifications
  })
})
/*
const UpdateNotificationMutation = graphql(UPDATE_NOTIFICATION_MUTATION, {
  props ({ mutate }) {
    return {
      updateNotification (id) {
        return mutate({
          variables: { id },
          update: (store, response) => {
            // redirect({}, '/contracts')
          }
        })
      }
    }
  }
}) */

const NotificationsPageWithQueries = compose(
  NotificationsQuery
  // UpdateNotificationMutation
)(NotificationsContainer)

export default NotificationsPageWithQueries
