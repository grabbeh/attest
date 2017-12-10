import LOGGED_USER_QUERY from '../queries/LoggedUserQuery'

export default ({ client }) => {
  console.log(client)
  client
    .query({
      query: LOGGED_USER_QUERY
    })
    .then(({ data }) => {
      console.log(data)
      return { user: data }
    })
    .catch(() => {
      // Fail gracefully
      return { user: false }
    })
}
