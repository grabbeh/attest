import Checkbox from './CheckBox'
import React from 'react'

class CheckboxList extends React.Component {
  constructor (props) {
    super(props)
  }

  createCheckboxes = (arr, checked) => {
    const { toggleCheckbox, error } = this.props
    if (arr.length > 0) {
      return arr.map((item, i) => {
        return (
          <Checkbox
            checked={item.checked}
            label={item}
            handleCheckboxChange={toggleCheckbox}
            key={i}
          />
        )
      })
    } else return <div>{error}</div>
  }

  render () {
    let { content, checked } = this.props
    return (
      <ul className='mt2 pb2 ma0 f4 bw1 pa0 ph3 list flex flex-wrap  '>
        {this.createCheckboxes(content, checked)}
      </ul>
    )
  }
}

export default CheckboxList
