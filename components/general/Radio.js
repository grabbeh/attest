import cn from 'classnames'
import react from 'react'

class Radio extends react.Component {
  
  getStyle (color) {
    const { selectedItem } = this.props
    return {
      backgroundColor: selectedItem ? color : '',
      borderColor: color
    }
  }
  
  render () {
    let { items, handleChange, selectedItem } = this.props
    return items.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          style={this.getStyle(s.color)}
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
            s.name === selectedItem && 'white'
          )}
        >
          <input
            className='dn'
            type='radio'
            value={s.name}
            checked={s.name === selectedItem}
            onChange={() => handleChange(s)}
          />
          {s.name}
        </label>
      </div>
    ))
  }
}

export default Radio
