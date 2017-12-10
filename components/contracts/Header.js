import Link from 'next/link'
import react from 'react'
// import { graphql } from 'react-apollo'
// import LOGGED_USER_QUERY from '../../queries/LoggedUserQuery'

class Header extends react.Component {
  render () {
    const { user } = this.props
    return (
      <div className='bg-dark-peach pa2 f4 b'>
        <span>Attest</span>
        <span className='fr'>
          {user
            ? <div>{user.email}</div>
            : <Link href='/login'>
              <a className='link dim black'>Login</a>
            </Link>}
        </span>
      </div>
    )
  }
}
/*
const Header = graphql(LOGGED_USER_QUERY, {
  props: ({ data }) => ({
    data
  })
})(HeaderContent)
*/
export default Header
