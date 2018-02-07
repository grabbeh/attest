import react from 'react'
import Flex from '../styles/Flex'
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
      <div>
        <label htmlFor={value}>
          {label}
        </label>
        <div>
          <Flex>
            <input
              className={cn(
                'bw1',
                'pa1',
                'f5',
                'mt1',
                'mb2',
                'ba',
                'b--blue',
                'font',
                'w-50'
              )}
              id={value}
              onChange={onChange}
              placeholder={placeholder}
              value={value}
              type={type}
              name={name}
              onFocus={this.onFocus}
            />
            {this.props.onClick
              ? <div
                className='ml2 h2 mt1 b bg-green white pa2 br2'
                onClick={this.props.onClick}
                >
                  Add
                </div>
              : <div />}
          </Flex>
        </div>
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

export default Input
