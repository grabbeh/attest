import { Component } from 'react'

class Tab extends Component {
  render () {
    const { isActive, isDisabled, onSelect } = this.props
    console.log(this.props)
    return (
      <div
        className={isDisabled ? 'bg-white' : isActive ? 'bg-gray' : 'tab'}
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab
