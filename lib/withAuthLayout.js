import { Component } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'

const WithAuthLayout = ComposedComponent => {
  return class WithAuth extends Component {
    static async getInitialProps (context, client) {
      let user = false
      user = await checkLoggedIn(client)
      if (!user) {
        redirect(context, '/login')
      } else return { user }
    }

    render () {
      return (
        <div>
          <Header client={this.props.client} user={this.props.user} />
          <SideColumn>
            <ComposedComponent {...this.props} />
          </SideColumn>
        </div>
      )
    }
  }
}

export default WithAuthLayout
