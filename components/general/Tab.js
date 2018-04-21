import { Component } from 'react'
import cn from 'classnames'

class Tab extends Component {
  render () {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={cn(isActive && 'underline b', 'f4 fl pv2 pr3')}
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab
