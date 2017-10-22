import React from 'react'
import cn from 'classnames'

export default ({ children, status }) => (
  <div
    className={cn(
      'h5',
      'w5',
      'ma2',
      'pa2',
      'fl',
      status === 'Executed' && 'bg-green',
      status === 'Instructed' && 'bg-light-red',
      status === 'Drafted' && 'bg-light-yellow'
    )}
  >
    {children}
  </div>
)
