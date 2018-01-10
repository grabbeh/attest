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
    const { label, type, placeholder, name, onChange, value } = this.props
    const { active } = this.state
    return (
      <div className='w-100 b'>
        <label htmlFor={value}>
          {label}
        </label>
        <div>
          <input
            className={cn('bw1', 'pa1', 'f5', 'mv2', 'ba', 'b--blue')}
            id={value}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            onFocus={this.onFocus}
          />
        </div>
      </div>
    )
  }
}

export default Input
