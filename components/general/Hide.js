import React from 'react'
import cn from 'classnames'
import FadeInDiv from '../styles/FadeInDiv'

class HideToggle extends React.Component {
  setFilter = () => {
    this.props.toggleFilter(this.props.title)
  }

  render () {
    let { title, children, filterUsed, toggleFilter, activeFilter } = this.props
    return (
      <div className='front'>
        <div onClick={this.setFilter} className='mb2 pointer mr2'>
          <span
            className={cn(filterUsed && 'bg-light-gray', 'ph3', 'pv2', 'f4')}
          >
            {title}
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
