import React from 'react'
import cn from 'classnames'

export default ({ children, status, id }) => (
  <li
    key={id}
    className={cn(
      'f5',
      'br2',
      'pa2',
      'mb3',
      'w-20-ns',
      'w-100',
      'mr3-ns',
      'mr0',
      status === 'Executed' && 'bg-green',
      status === 'Instructed' && 'bg-light-red',
      status === 'Drafted' && 'bg-light-yellow',
      status === 'Approved' && 'bg-light-green'
    )}
  >
    {children}
  </li>
)
