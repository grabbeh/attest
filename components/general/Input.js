import react from 'react'
import cn from 'classnames'

class Input extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    const {
      label,
      type,
      placeholder,
      name,
      onChange,
      value,
      error,
      onFocus,
      onBlur
    } = this.props

    return (
      <div className='f4 b'>
        <label className='mr3' htmlFor={value}>
          {label}
        </label>
        <input
          className={cn(
            'bw1',
            'pa1',
            'f4',
            'mt1',
            'mb2',
            'bb',
            'bw1',
            'b--black-20',
            'font'
          )}
          id={value}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {this.props.onClick &&
          <button
            className='ml3 f5 bg-green white pv2 ph3 br2'
            onClick={this.props.onClick}
          >
            ADD
          </button>}
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

export default Input
