import React, { Component } from 'react'
import cn from 'classnames'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.checked
    }
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }))
    handleCheckboxChange(label)
  }

  getStyle () {
    const { color, checked } = this.props
    return {
      backgroundColor: checked ? color : '',
      borderColor: color
    }
  }

  render () {
    const { label, color, checked } = this.props

    return (
      <li key={label} className='pb2 mr2 fl'>
        <label>
          <input
            className='dn'
            type='checkbox'
            value={label}
            checked={checked}
            onChange={this.toggleCheckboxChange}
          />
          <div
            style={this.getStyle()}
            className={cn(
              'pointer',
              'fr',
              'f4',
              'pv1',
              'ph3',
              'bg-white',
              'ba',
              'bw1',
              'ba',
              'b--blue',
              checked && 'bg-blue',
              checked && 'white'
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
