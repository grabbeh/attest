import React from 'react'
import cn from 'classnames'

class HideToggle extends React.Component {
  setFilter = () => {
    this.props.toggleFilter(this.props.title)
  }

  render () {
    let { title, children, filterUsed, toggleFilter, activeFilter } = this.props
    return (
      <div>
        <div onClick={this.setFilter} className='mv2 pointer mr2'>
          <span
            className={cn(filterUsed && 'bg-light-gray', 'ph3', 'pv2', 'f4')}
          >
            {title}
          </span>
        </div>
        <div
          className={cn(
            activeFilter !== title && 'dn',
            'absolute',
            'shadow-4',
            'bg-white'
          )}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default HideToggle
