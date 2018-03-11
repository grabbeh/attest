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

    constructor (props) {
      console.log(props)
      super(props)
      this.state = { showMenu: false }
    }

    componentDidMount () {
      window.addEventListener('resize', () => {
        this.setState({ showMenu: window.innerWidth > 400 })
      })
    }

    toggle = () => {
      this.setState({ showMenu: !this.state.showMenu })
    }

    render () {
      return (
        <div>
          <Header
            toggle={this.toggle}
            client={this.props.client}
            user={this.props.user}
          />
          <SideColumn showMenu={this.state.showMenu}>
            <ComposedComponent showMenu={this.state.showMenu} {...this.props} />
          </SideColumn>
        </div>
      )
    }
  }
}

export default WithAuthLayout
