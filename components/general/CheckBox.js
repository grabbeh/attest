import React from 'react'
import getTextColor from '../../lib/getTextColor'
import cn from 'classnames'

const Checkbox = props => {
  const { color, checked, value, handleChange, name } = props
  const getStyle = () => {
    let textColor = ''
    if (color) textColor = getTextColor(color)
    else textColor = 'white'
    return {
      backgroundColor: checked ? color : '',
      borderColor: color,
      color: checked ? textColor : 'black'
    }
  }

  return (
    <li key={value} className='pb2 mr2 fl'>
      <label>
        <input
          name={name}
          value={value}
          selected={checked}
          onChange={handleChange}
          className='dn'
          type='checkbox'
        />
        <div
          style={getStyle()}
          className={cn(
            'pointer',
            'fr',
            'f4',
            'pv1',
            'ph3',
            'bg-white',
            'ba',
            'bw1',
            'ba',
            'b--blue',
            checked && 'bg-blue',
            checked && 'white'
          )}
        >
          {value}
        </div>
      </label>
    </li>
  )
}

export default Checkbox
