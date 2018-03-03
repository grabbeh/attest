import React from 'react'
import checkLoggedIn from './checkLoggedIn'

const WithUser = ComposedComponent => {
  return class WithUser extends React.Component {
    static async getInitialProps (context, client) {
      let user = false
      user = await checkLoggedIn(client)
      return { user }
    }

    render () {
      return <ComposedComponent {...this.props} user={this.props.user} />
    }
  }
}

export default WithUser
