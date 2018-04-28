import React, { Component } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'
import { Provider } from './Context'
import updateSeenNotifications from './updateSeenNotifications'
import UNSEEN_NOTIFICATIONS_QUERY from '../queries/UnseenNotificationsQuery'
import _ from 'lodash'

const userOnly = ['/contract', '/contracts', '/notifications', '/settings']
const unavailableToUser = ['/login', '/invite']

class ContextProvider extends Component {
  state = {
    user: this.props.user,
    showMenu: false
  }

  render () {
    return (
      <Provider
        value={{
          state: this.state,
          toggleMenu: () => {
            this.setState({ showMenu: !this.state.showMenu })
          }
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

const WithAuthLayout = ComposedComponent => {
  return class WithAuthLayout extends Component {
    static async getInitialProps (context, client) {
      let { user, unseenNotifications } = await checkLoggedIn(client)
      let { pathname } = context
      if (unavailableToUser.includes(pathname) && user) {
        redirect(context, '/contracts')
      }
      if (userOnly.includes(pathname) && !user) {
        redirect(context, '/login')
      }
      return { user, unseenNotifications }
    }

    constructor (props) {
      super(props)
      this.state = {
        unseenNotifications: this.props.unseenNotifications
      }
    }

    componentDidMount () {
      // here we are updating notifications so they've been seen by the user
      // so the alert does not display any more
      if (this.props.url.pathname === '/notifications') {
        updateSeenNotifications(this.props.client)
        this.props.client.writeQuery({
          query: UNSEEN_NOTIFICATIONS_QUERY,
          data: { unseenNotifications: [] }
        })
        this.setState({ unseenNotifications: false })
      }
    }

    render () {
      let { client, user, url } = this.props
      let { unseenNotifications } = this.state
      return (
        <ContextProvider user={user}>
          <Header unseenNotifications={unseenNotifications} client={client} />
          <SideColumn url={url.pathname}>
            <ComposedComponent {...this.props} />
          </SideColumn>
        </ContextProvider>
      )
    }
  }
}

export default WithAuthLayout
