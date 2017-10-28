import React, { Component } from 'react'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: true
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
      <li className='pa2 fl'>
        <label>
          <input
            type='checkbox'
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </li>
    )
  }
}

export default Checkbox
