import cn from 'classnames'

const ContractHolder = ({ children, index }) => (
  <li
    className={cn(
      (index + 1) % 4 === 0 && 'mr0-l',
      (index + 1) % 4 !== 0 && 'mr3-l',
      (index + 1) % 4 === 0 && 'mr0',
      (index + 1) % 4 !== 0 && 'mr0',
      (index + 1) % 2 === 0 && 'mr0-ns',
      (index + 1) % 2 !== 0 && 'mr3-ns',
      'bg-haus',
      'f5',
      'pa3',
      'mb3',
      'overflow-hidden',
      'h-100'
    )}
  >
    {children}
  </li>
)

export default ContractHolder
