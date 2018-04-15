import UPDATE_SEEN_NOTICATIONS_MUTATION
  from '../queries/UpdateSeenNotificationsMutation'

export default client => {
  client
    .mutate({
      mutation: UPDATE_SEEN_NOTICATIONS_MUTATION
    })
    .then(res => {
      return res
    })
}
