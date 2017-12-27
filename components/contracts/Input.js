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
      <div className='pv2 w-100 bb bw1'>
        <label htmlFor={value} className={cn(!active && 'dn', 'b', 'f6')}>
          {label}
        </label>
        <div>
          <input
            className='pa1 f5'
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
