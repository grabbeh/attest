import react from 'react'

class Select extends react.Component {
  render () {
    let { selectedItem, handleChange, items } = this.props
    return (
      <div className='mb2'>
        <select
          className='pa2 f4 font ba bw1 b--black-20'
          value={selectedItem}
          key={selectedItem}
          onChange={handleChange}
        >
          {items.map(l => (
            <option key={l.email} value={l.email}>
              {l.email}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default Select
