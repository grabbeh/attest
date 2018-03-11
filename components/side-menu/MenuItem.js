import Link from 'next/link'
import cn from 'classnames'

const MenuItem = ({ icon, url, selectedUrl }) => {
  console.log(url)
  console.log(selectedUrl)
  return (
    <li className='pt4'>
      <Link href={url}>
        <a
          className={cn(
            url === selectedUrl && 'light-gray',
            'gray',
            'white-50'
          )}
        >
          <i className={icon} />
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
