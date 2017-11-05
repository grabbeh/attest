import React from 'react'

class DateInput extends React.Component {
  render () {
    console.log(this.props)
    return (
      <button onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

export default DateInput
