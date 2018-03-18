import react from 'react'

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
        <div>
          <label className='mr3' htmlFor={value}>
            {label}
          </label>
        </div>
        <input
          className='w-100 mw5 bw1 pa1 f4 bb b--black-20 font'
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
          <div className='mt3 pt0-ns'>
            <button
              className='f6 bg-green white pv2 ph3'
              onClick={this.props.onClick}
            >
              <i className='fa fa-plus' />
            </button>
          </div>}
        <div className='red b f6'>{error}</div>
      </div>
    )
  }
}

export default Input
