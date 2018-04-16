import React from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'

const WithUser = ComposedComponent => {
  return class WithUser extends React.Component {
    static async getInitialProps (context, client) {
      let data = await checkLoggedIn(client)
      console.log(this.props)
      console.log(this.context)
      if (data.user) {
        redirect(context, '/contracts')
      } else return { user: data.user }
    }

    render () {
      return <ComposedComponent {...this.props} user={this.props.user} />
    }
  }
}

export default WithUser
