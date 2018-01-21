import React from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'

export default ComposedComponent => {
  return class WithAuth extends React.Component {
    static async getInitialProps (context, client) {
      let user = null
      if (!process.browser) {
        user = context.req.user
      } else {
        user = await checkLoggedIn(client)
      }
      if (!user) {
        // If not signed in, send them somewhere more useful
        redirect(context, '/login')
      } else return { serverRendered: !process.browser, user }
    }

    componentDidMount () {
      if (this.props.serverRendered) {
        user = this.props.user
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }
}
