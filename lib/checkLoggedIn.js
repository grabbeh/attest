import LOGGED_USER_AND_NOTIFICATIONS_QUERY from '../queries/LoggedUserQuery'

export default client => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: LOGGED_USER_AND_NOTIFICATIONS_QUERY
      })
      .then(({ data }) => {
        resolve(data)
      })
  })
}
