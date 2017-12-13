import Link from 'next/link'
import react from 'react'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'

class Header extends react.Component {
  constructor (props) {
    super(props)
  }

  logout = () => {
    document.cookie = cookie.serialize('token', '')
    this.props.client.resetStore().then(() => {
      redirect({}, '/')
    })
  }

  render () {
    const { user } = this.props
    return (
      <div className='bg-dark-peach pa2 f4 b'>
        <span>Attest</span>
        <span className='fr'>
          {user
            ? <div className='f4-ns f6'>
              <span>{user.email}</span>
              <span className='pl2' onClick={this.logout}>
                <i title='Sign out' className='fa fa-sign-out' />
              </span>
            </div>
            : <Link href='/login'>
              <a className='link dim black'>Login</a>
            </Link>}
        </span>
      </div>
    )
  }
}

export default Header
