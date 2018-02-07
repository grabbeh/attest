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

  render () {
    const { label, color } = this.props
    const { isChecked } = this.state
    return (
      <li key={label} className='fl pb2 mr2 fl white f5'>
        <div
          style={{ background: color }}
          className={cn('fl', 'pv1', 'ph3', 'bg-blue', 'white')}
        >
          {label}
        </div>
        <label>
          <input
            className='dn'
            type='checkbox'
            value={label}
            onChange={this.toggleCheckboxChange}
          />
          <div className='fl pv1 ph2 bg-dark-blue'>
            <i className='fa fa-times' />
          </div>

        </label>
      </li>
    )
  }
}

export default Checkbox
