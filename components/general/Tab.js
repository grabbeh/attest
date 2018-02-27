import { Component } from 'react'

class Tab extends Component {
  render () {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={
          isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'
        }
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab
