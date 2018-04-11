import React from 'react'
import cn from 'classnames'
import FadeInDiv from '../styles/FadeInDiv'

class HideToggle extends React.Component {
  setFilter = () => {
    this.props.toggleFilter(this.props.title)
  }

  render () {
    let {
      title,
      icon,
      children,
      filterUsed,
      toggleFilter,
      activeFilter
    } = this.props
    return (
      <div>
        <div onClick={this.setFilter} className='mb3 mb2-ns pointer mr2'>
          <span
            className={cn(filterUsed && 'bg-light-gray', 'ph3', 'pv2', 'f4')}
          >
            <span className='mr2'><i className={icon} /></span>
            <span>{title}</span>
          </span>
        </div>

        <FadeInDiv activeFilter={activeFilter} title={title}>
          {children}
        </FadeInDiv>
      </div>
    )
  }
}

export default HideToggle
