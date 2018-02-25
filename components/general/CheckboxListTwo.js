import Checkbox from './CheckBox'
import React from 'react'

class CheckboxList extends React.Component {
  constructor (props) {
    super(props)
  }

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
    } else return <div>{error}</div>
  }

  render () {
    let { content, checked } = this.props
    return (
      <ul className='mt3 pb2 ma0 bw1 pa0 ph3 list flex flex-wrap'>
        {this.createCheckboxes(content, checked)}
      </ul>
    )
  }
}

export default CheckboxList
