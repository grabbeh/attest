import React from 'react'
import cn from 'classnames'

export default ({ children, status }) => (
  <div
    className={cn(
      'h2',
      'w5',
      'mb3',
      'pa1',
      status === 'Executed' && 'bg-green',
      status === 'Instructed' && 'bg-light-red',
      status === 'Drafted' && 'bg-light-yellow',
      status === 'Approved' && 'bg-light-green'
    )}
  >
    {children}
  </div>
)
