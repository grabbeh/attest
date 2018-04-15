import React, { Component, Fragment, createContext } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'
import { Provider } from './Context'

class ContextProvider extends Component {
  render () {
    let { user, allNotifications } = this.props
    return (
      <Provider
        value={{
          user,
          allNotifications
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
        let { user, allNotifications } = data
        return { user, allNotifications }
      }
    }

    constructor (props) {
      super(props)
      this.state = { showMenu: false }
    }

    toggle = () => {
      this.setState({ showMenu: !this.state.showMenu })
    }

    render () {
      let { client, user, url, allNotifications } = this.props
      let { showMenu } = this.state
      return (
        <ContextProvider allNotifications={allNotifications} user={user}>
          <Header
            toggle={this.toggle}
            allNotifications={allNotifications}
            client={client}
            user={user}
          />
          <SideColumn url={url.pathname} showMenu={showMenu}>
            <ComposedComponent showMenu={showMenu} {...this.props} />
          </SideColumn>
        </ContextProvider>
      )
    }
  }
}

export default WithAuthLayout
