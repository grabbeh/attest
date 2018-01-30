import react from 'react'

class Select extends react.Component {
  render () {
    let { selectedItem, handleChange, items } = this.props
    return (
      <div className='mb2'>
        <select
          className='pa1 font ba bw1 b--blue'
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