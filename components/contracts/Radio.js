import cn from 'classnames'
import react from 'react'

class Radio extends react.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { items, handleChange, selectedItem } = this.props
    return items.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          className={cn(
            'pointer',
            'fr',
            'f5',
            'pv1',
            'ph3',
            'black',
            'mb2',
            'bg-white',
            'ba',
            'b--blue',
            'bw1',
            s.name === selectedItem && 'white',
            s.name === selectedItem && 'bg-blue'
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
