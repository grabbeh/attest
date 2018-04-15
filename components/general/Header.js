import Link from 'next/link'
import react, { Fragment } from 'react'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'

class Header extends react.Component {
  logout = () => {
    redirect({}, '/')
    this.props.client.resetStore()
    document.cookie = cookie.serialize('token', '')
  }

  render () {
    const { user, toggle, allNotifications } = this.props
    return (
      <div className='relative front-two bg--dark-peach pa2 f3'>
        <span onClick={toggle} className='dark-gray'>
          <i className='mr3 fa fa-bars' />
        </span>
        <span className='b dark-gray'>
          Attest
        </span>
        <span className='fr'>
          {user
            ? <Fragment>
              <div className='mt1 f4'>

                <div className='relative'>
                  {allNotifications.length > 0 &&
                  <span className='tc bg-blue br-100 notification'>
                    {allNotifications.length}
                  </span>}
                  <span className='bell absolute'>
                    <Link href='/notifications'>
                      <a className='dark-gray'>
                        <i className=' fa fa-bell fa-lg' />
                      </a>
                    </Link>
                  </span>
                </div>
                <span>
                  <i className='ml3 dark-gray fa fa-user-circle fa-lg' />
                </span>
                <span className='ml3' onClick={this.logout}>
                  <i title='Sign out' className='fa fa-sign-out fa-lg' />
                </span>
              </div>
            </Fragment>
            : <Link href='/login'>
              <a className='link dark-gray dim'>Login</a>
            </Link>}
        </span>
      </div>
    )
  }
}

export default Header
