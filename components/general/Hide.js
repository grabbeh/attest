import React from 'react'
import cn from 'classnames'

class HideToggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: props.show
    }
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render () {
    let { title, children, active, current } = this.props
    let { show } = this.state
    return (
      <div>
        <div onClick={this.toggle} className='mv2 pointer mr2'>
          {show
            ? <div>
              <span
                className={cn(active && 'bg-light-gray', 'ph3', 'pv2', 'f4')}
                >
                {title}
              </span>
            </div>
            : <div>
              <span
                className={cn(active && 'bg-light-gray', 'ph3', 'pv2', 'f4')}
                >
                {title}
              </span>
            </div>}
        </div>
        <div className={cn(!show && 'dn', 'absolute', 'shadow-4', 'bg-white')}>
          {children}
        </div>
      </div>
    )
  }
}

export default HideToggle
