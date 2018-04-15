import cn from 'classnames'

const UserHolder = ({ children, index }) => (
  <li
    className={cn(
      (index + 1) % 4 === 0 && 'mr0-l mr0',
      (index + 1) % 4 !== 0 && 'mr3-l mr0',
      (index + 1) % 4 === 0 && 'mr0',
      (index + 1) % 4 !== 0 && 'mr0',
      (index + 1) % 2 === 0 && 'mr0-ns',
      (index + 1) % 2 !== 0 && 'mr3-ns',
      'mr2',
      'f4',
      'pa3',
      'overflow-hidden',
      'h-100',
      'bg-dark-gray',
      'gray'
    )}
  >
    {children}
  </li>
)

export default UserHolder
