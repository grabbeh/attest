import cn from 'classnames'
import react from 'react'

class Radio extends react.Component {
  getStyle (status) {
    const { selectedItem } = this.props
    return {
      backgroundColor: selectedItem === status.name ? status.color : '',
      borderColor: status.color
    }
  }

  render () {
    let { items, handleChange, selectedItem } = this.props
    return items.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          style={this.getStyle(s)}
          className={cn(
            'pointer',
            'bg-white',
            'fr',
            'f4',
            'pv1',
            'ph3',
            'mb2',
            'ba',
            'b--blue',
            'bw1',
            'black',
            s.name === selectedItem && 'bg-blue',
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
