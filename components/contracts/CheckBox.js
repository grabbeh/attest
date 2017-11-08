import React, { Component } from 'react'
import cn from 'classnames'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.checked
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
  }

  toggleCheckboxChange () {
    const { handleCheckboxChange, label } = this.props
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }))
    handleCheckboxChange(label)
  }

  render () {
    const { label } = this.props
    const { isChecked } = this.state

    return (
      <li key={label} className='pb2 pr2 fl'>
        <label>
          <input
            className='dn'
            type='checkbox'
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <div
            className={cn(
              'pointer',
              'fr',
              'f6',
              'b',
              'pa1',
              'shadow-4',
              isChecked && 'bg-blue',
              isChecked && 'white'
            )}
          >
            {label}
          </div>
        </label>
      </li>
    )
  }
}

export default Checkbox
