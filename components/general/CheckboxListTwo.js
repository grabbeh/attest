import getTextColor from '../../lib/getTextColor'
import cn from 'classnames'
import React from 'react'

class CheckboxList extends React.Component {
  createCheckboxes = (arr, checked) => {
    let check = checked || false
    const { toggleCheckbox, error } = this.props
    if (arr.length > 0) {
      return arr.map((item, i) => {
        return (
          <Checkbox
            checked={item.checked}
            label={item.name}
            handleCheckboxChange={toggleCheckbox}
            key={i}
            color={item.color}
          />
        )
      })
    } else return <div className='f4'>{error}</div>
  }

  render () {
    let { content, checked } = this.props
    return (
      <ul className='front-two mt3 pb2 ma0 bw1 pa0 ph3 list flex flex-wrap'>
        {this.createCheckboxes(content, checked)}
      </ul>
    )
  }
}

export default CheckboxList

class Checkbox extends React.Component {
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
    let textColor = ''
    if (color) textColor = getTextColor(color)
    else textColor = 'white'
    return {
      backgroundColor: checked ? color : '',
      borderColor: color,
      color: checked ? textColor : 'black'
    }
  }

  render () {
    const { label, checked } = this.props
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
