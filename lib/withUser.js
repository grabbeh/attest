import React from 'react'
import checkLoggedIn from './checkLoggedIn'

export default ComposedComponent => {
  return class WithPage extends React.Component {
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
