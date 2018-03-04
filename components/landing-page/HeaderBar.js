import Link from 'next/link'

const HeaderBar = props => (
  <div>
    {props.user
      ? <div>
        <span>
          <Link href='/contracts'>
            <a className='dim link black'>
              <i className='dark-gray fa fa-user-circle fa-lg' />
            </a>
          </Link>
        </span>
        <span className='pl3 dark-gray' onClick={props.logout}>
          <i title='Sign out' className='fa fa-sign-out fa-lg' />
        </span>
      </div>
      : <Link href='/login'>
        <a className='f3 dim link black'>Login</a>
      </Link>}
  </div>
)

export default HeaderBar
