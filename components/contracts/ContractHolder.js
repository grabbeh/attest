import React from 'react'
import cn from 'classnames'

export default ({ children, status }) => (
  <div
    className={cn('min-h4', 'w5', 'ma2', 'pa2', 'fl', status && 'bg-light-red')}
  >
    {children}
  </div>
)
/*
<i
    className={cn(
      '',

      status && 'fa-twitter',
      github && 'fa-github',
      pencil && 'fa-pencil'
    )}
  />
  */
