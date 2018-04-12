import React, { Component, Fragment, createContext } from 'react'
import checkLoggedIn from './checkLoggedIn'
import redirect from './Redirect'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'
import { Provider } from './Context'

class ContextProvider extends Component {
  render () {
    return (
      <Provider value={{ user: { ...this.props.user } }}>
        {this.props.children}
      </Provider>
    )
  }
}

const WithAuthLayout = ComposedComponent => {
  return class WithAuthLayout extends Component {
    static async getInitialProps (context, client) {
      let user = false
      user = await checkLoggedIn(client)
      if (!user) {
        redirect(context, '/login')
      } else return { user }
    }

    constructor (props) {
      super(props)
      this.state = { showMenu: false }
    }
    /*
    componentDidMount () {
      window.addEventListener('resize', () => {
        this.setState({ showMenu: window.innerWidth > 400 })
      })
    }
*/
    toggle = () => {
      this.setState({ showMenu: !this.state.showMenu })
    }

    render () {
      let { client, user, url } = this.props
      let { showMenu } = this.state
      return (
        <ContextProvider user={user}>
          <Header toggle={this.toggle} client={client} user={user} />
          <SideColumn url={url.pathname} showMenu={showMenu}>
            <ComposedComponent showMenu={showMenu} {...this.props} />
          </SideColumn>
        </ContextProvider>
      )
    }
  }
}

export default WithAuthLayout
