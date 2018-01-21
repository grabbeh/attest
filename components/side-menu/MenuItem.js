import Link from 'next/link'

const MenuItem = ({ icon, url }) => (
  <li className='mt4'>
    <Link href={url}>
      <a className='white-50'>
        <i className={icon} />
      </a>
    </Link>
  </li>
)

export default MenuItem
