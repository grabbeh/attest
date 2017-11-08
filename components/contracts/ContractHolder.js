import React from 'react'
import cn from 'classnames'

export default ({ children, status }) => (
  <li
    className={cn(
      'f5',
      'pa2',
      'mb3',
      'w-20-ns',
      'w-100',
      'mr3-ns',
      'mr0',
      'shadow-4',
      'bg-white'
    )}
  >
    {children}
  </li>
)
