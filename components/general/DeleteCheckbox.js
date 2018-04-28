import React, { Component } from 'react'
import { GithubPicker } from 'react-color'
import getTextColor from '../../lib/getTextColor'
import cn from 'classnames'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.checked,
      showPicker: false
    }
  }

  togglePicker = () => {
    this.setState({ showPicker: true })
  }

  getColor = (color, event) => {
    const { label, index, setColor } = this.props
    this.setState({ showPicker: false })
    setColor(label, color.hex, index)
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label, index } = this.props
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }))
    handleCheckboxChange(label, index)
  }

  getStyle () {
    const { color, checked } = this.props
    let textColor = ''
    if (color) textColor = getTextColor(color)
    else textColor = 'white'
    return {
      backgroundColor: color,
      color: textColor
    }
  }

  render () {
    const { label, color } = this.props
    const { isChecked, showPicker } = this.state
    return (
      <li key={label} className='fl pb2 mr2 fl white'>
        <div style={this.getStyle()} className='fl pv1 ph3 bg-blue white'>
          {label}
        </div>
        <label>
          <input
            className='dn'
            type='checkbox'
            value={label}
            onChange={this.toggleCheckboxChange}
          />
          <div className='fl pv1 ph2 gray bg-dark-gray br b--black-70'>
            <i className='fa fa-times' />
          </div>
        </label>
        <div
          onClick={this.togglePicker}
          className='pv1 ph2 fl gray bg-dark-gray'
        >
          <i className='fa fa-tint' />
        </div>
        <div className='fl'>
          {showPicker &&
            <GithubPicker color={color} onChangeComplete={this.getColor} />}
        </div>
      </li>
    )
  }
}

export default Checkbox
