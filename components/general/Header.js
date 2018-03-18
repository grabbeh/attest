import Link from 'next/link'
import react from 'react'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'

class Header extends react.Component {
  logout = () => {
    this.props.client.resetStore()
    document.cookie = cookie.serialize('token', '')
    redirect({}, '/')
  }

  render () {
    const { user, toggle } = this.props
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
            ? <div className='mt1 f4-ns f5'>
              <span><i className='dark-gray fa fa-user-circle fa-lg' /></span>
              <span className='ml3' onClick={this.logout}>
                <i title='Sign out' className='fa fa-sign-out fa-lg' />
              </span>
            </div>
            : <Link href='/login'>
              <a className='link dark-gray dim'>Login</a>
            </Link>}
        </span>
      </div>
    )
  }
}

export default Header
