import React from 'react'
import cn from 'classnames'

export default ({ children, status }) => (
  <div
    className={cn(
      'h5',
      'w5-ns',
      'f5',
      'mr3',
      'pa2',
      'w-100',
      'mb3',
      'fl',
      status === 'Executed' && 'bg-green',
      status === 'Instructed' && 'bg-light-red',
      status === 'Drafted' && 'bg-light-yellow',
      status === 'Approved' && 'bg-light-green'
    )}
  >
    {children}
  </div>
)
