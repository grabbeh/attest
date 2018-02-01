import Checkbox from './CheckBox'
import React from 'react'

class CheckboxList extends React.Component {
  constructor (props) {
    super(props)
  }

  createCheckboxes = (arr, checked) => {
    let check = checked || false
    const { toggleCheckbox, error } = this.props
    if (arr.length > 0 && arr[0].length > 0) {
      return arr.map(label => {
        return (
          <Checkbox
            checked={check}
            label={label}
            handleCheckboxChange={toggleCheckbox}
            key={label}
          />
        )
      })
    } else return <div>{error}</div>
  }

  render () {
    let { content, checked } = this.props
    return (
      <ul className='mt2 pb2 ma0 bb b--black-20 bw1 pa0 pl3 list flex flex-wrap  '>
        {this.createCheckboxes(content, checked)}
      </ul>
    )
  }
}

export default CheckboxList
