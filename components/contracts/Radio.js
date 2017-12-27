import cn from 'classnames'
import react from 'react'

class Radio extends react.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { items, handleChange } = this.props
    let selectedItem = this.props.selectedItem
    return items.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          className={cn(
            'pointer',
            'fr',
            'f5',
            'pa1',
            'black',
            'mb2',
            'bg-white',
            s.name === selectedItem && 'white',
            s.name === selectedItem && 'bg-dark-sur'
          )}
        >
          <input
            className='dn'
            type='radio'
            value={s.name}
            checked={s.name === selectedItem}
            onChange={handleChange}
          />
          {s.name}
        </label>
      </div>
    ))
  }
}

export default Radio
