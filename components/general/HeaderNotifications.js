import { Component } from 'react'
import Link from 'next/link'

class HeaderNotifications extends Component {
  render () {
    let { notifications } = this.props
    return (
      <div className='relative'>
        {notifications &&
          notifications.length > 0 &&
          <span className='tc bg-blue br-100 notification'>
            {notifications.length}
          </span>}
        <span className='bell absolute'>
          <span>
            <Link href='/notifications'>
              <a className='dark-gray'>
                <i className=' fa fa-bell fa-lg' />
              </a>
            </Link>
          </span>
        </span>
      </div>
    )
  }
}

export default HeaderNotifications
