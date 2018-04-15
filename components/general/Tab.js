import { Component } from 'react'
import cn from 'classnames'

class Tab extends Component {
  render () {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={cn(isActive && 'underline b', 'f3 fl pv2 pr3 mr3  ')}
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab
