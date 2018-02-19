import Link from 'next/link'
import react from 'react'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'

class Header extends react.Component {
  constructor (props) {
    super(props)
  }

  logout = () => {
    redirect({}, '/')
    this.props.client.resetStore()
    document.cookie = cookie.serialize('token', '')
  }

  render () {
    const { user } = this.props
    return (
      <div className='relative front bg--dark-peach pa2 f3'>
        <span className='b dark-gray'>
          <i className='mr2 fa fa-file' />Attest
        </span>
        <span className='fr'>
          {user
            ? <div className='mt1 f4-ns f6'>
              <span>{user.email}</span>
              <span className='pl2' onClick={this.logout}>
                <i title='Sign out' className='fa fa-sign-out' />
              </span>
            </div>
            : <Link href='/login'>
              <a className='link dim'>Login</a>
            </Link>}
        </span>
      </div>
    )
  }
}

export default Header
