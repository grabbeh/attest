import react from 'react'
import cn from 'classnames'

class Input extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  onBlur = () => {
    this.setState({ active: false })
  }

  onFocus = () => {
    this.setState({ active: true })
  }

  render () {
    const {
      label,
      type,
      placeholder,
      name,
      onChange,
      value,
      error
    } = this.props
    const { active } = this.state
    return (
      <div className='w-100 '>
        <label htmlFor={value}>
          {label}
        </label>
        <div>
          <input
            className={cn(
              'bw1',
              'pa1',
              'f5',
              'mt1',
              'mb2',
              'ba',
              'b--blue',
              'font'
            )}
            id={value}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            onFocus={this.onFocus}
          />
        </div>
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

export default Input
