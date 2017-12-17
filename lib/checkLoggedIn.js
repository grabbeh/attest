import LOGGED_USER_QUERY from '../queries/LoggedUserQuery'

export default apollo => {
  apollo
    .query({
      query: LOGGED_USER_QUERY
    })
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      // Fail gracefully
      return { user: false }
    })
}
