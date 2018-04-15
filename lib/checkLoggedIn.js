import LOGGED_USER_QUERY from '../queries/LoggedUserQuery'

export default client => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: LOGGED_USER_QUERY
      })
      .then(({ data }) => {
        resolve(data)
      })
  })
}
