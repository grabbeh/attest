import React, { Component, Fragment, createContext } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'
import { Provider } from './Context'
import updateSeenNotifications from './updateSeenNotifications'
import UNSEEN_NOTIFICATIONS_QUERY from '../queries/UnseenNotificationsQuery'

class ContextProvider extends Component {
  render () {
    let { user, unseenNotifications } = this.props
    this.state = {
      user
    }
    return (
      <Provider
        value={{
          user: this.state.user
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
      let user = false
      let data = await checkLoggedIn(client)
      if (!data.user) {
        redirect(context, '/login')
      } else {
        let { user, unseenNotifications } = data
        return { user, unseenNotifications }
      }
    }

    constructor (props) {
      super(props)
      this.state = {
        showMenu: false,
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

    toggle = () => {
      this.setState({ showMenu: !this.state.showMenu })
    }

    render () {
      let { client, user, url } = this.props
      let { unseenNotifications } = this.state
      let { showMenu } = this.state
      return (
        <ContextProvider user={user}>
          <Header
            toggle={this.toggle}
            unseenNotifications={unseenNotifications}
            client={client}
            user={user}
          />
          <SideColumn url={url.pathname} showMenu={showMenu}>
            <ComposedComponent {...this.props} />
          </SideColumn>
        </ContextProvider>
      )
    }
  }
}

export default WithAuthLayout
