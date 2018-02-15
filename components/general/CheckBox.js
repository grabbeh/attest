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
    const { color } = this.props
    return {
      backgroundColor: this.state.isChecked ? color : '',
      borderColor: color
    }
  }

  render () {
    const { label, color } = this.props
    const { isChecked } = this.state
    return (
      <li key={label} className='pb2 mr2 fl'>
        <label>
          <input
            className='dn'
            type='checkbox'
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <div
            style={this.getStyle()}
            className={cn(
              'pointer',
              'fr',
              'f5',
              'pv1',
              'ph3',
              'bg-white',
              'ba',
              'bw1',
              'ba',
              'b--blue',
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
