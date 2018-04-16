import React, { Component, Fragment } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/landing-page/Header'
import SideColumn from '../components/side-menu/SideColumn'
import { Provider } from './Context'
import updateSeenNotifications from './updateSeenNotifications'
import UNSEEN_NOTIFICATIONS_QUERY from '../queries/UnseenNotificationsQuery'

const WithLandingPage = ComposedComponent => {
  return class WithLandingPage extends Component {
    static async getInitialProps (context, client) {
      let data = await checkLoggedIn(client)
      let { user, unseenNotifications } = data
      return { user, unseenNotifications }
    }

    constructor (props) {
      super(props)
      this.state = {
        showMenu: false,
        unseenNotifications: this.props.unseenNotifications
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
        <Fragment>
          <Header
            toggle={this.toggle}
            unseenNotifications={unseenNotifications}
            client={client}
            user={user}
          />
          <SideColumn url={url.pathname} showMenu={showMenu}>
            <ComposedComponent showMenu={showMenu} {...this.props} />
          </SideColumn>
        </Fragment>
      )
    }
  }
}

export default WithLandingPage
