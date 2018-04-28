import Link from 'next/link'
import react, { Fragment, Component } from 'react'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'
import HeaderNotifications from './HeaderNotifications'
import { Consumer } from '../../lib/Context'

class Header extends Component {
  logout = () => {
    document.cookie = cookie.serialize('token', '', { maxAge: -1 })
    redirect({}, '/')
    this.props.client.cache.reset()
  }

  render () {
    const { unseenNotifications } = this.props
    return (
      <Consumer>
        {context => {
          return (
            <div className='dark-gray relative front-two bg--dark-peach pa2 f3'>
              <span onClick={context.toggleMenu}>
                <i className='mr3 fa fa-bars' />
              </span>
              <span className='b'>
                Attest
              </span>
              <span className='fr'>
                {context.state.user
                  ? <Fragment>
                    <div className='mt1 f4'>
                      <HeaderNotifications
                        notifications={unseenNotifications}
                        />
                      <span>
                        <i className='ml3 fa fa-user-circle fa-lg' />
                      </span>
                      <span className='ml3' onClick={this.logout}>
                        <i
                          title='Sign out'
                          className='fa fa-sign-out fa-lg'
                          />
                      </span>
                    </div>
                  </Fragment>
                  : <Link href='/login'>
                    <a className='link dark-gray dim'>Login</a>
                  </Link>}
              </span>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Header
