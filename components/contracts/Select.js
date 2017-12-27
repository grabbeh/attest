import react from 'react'

class Select extends react.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { selectedItem, handleChange, items } = this.props
    return (
      <div className='mb2'>
        <select
          className='pa1'
          value={selectedItem}
          key={selectedItem}
          onChange={handleChange}
        >
          {items.map(l => (
            <option key={l.id} value={l.id}>
              {`${l.firstName} ${l.lastName}`}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default Select
