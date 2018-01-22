import React from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'

export default ComposedComponent => {
  return class WithAuth extends React.Component {
    static async getInitialProps (context, client) {
      let user = false
      user = await checkLoggedIn(client)
      if (!user) {
        redirect(context, '/login')
      } else return { user }
    }

    render () {
      return <ComposedComponent {...this.props} user={this.props.user} />
    }
  }
}
