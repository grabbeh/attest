import React from 'react'
import cn from 'classnames'

class HideToggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ show: !this.state.show })
  }
  render () {
    let { title, children } = this.props
    let { show } = this.state

    return (
      <div>
        <div onClick={this.toggle} className='f6 mt2 pointer'>
          {show
            ? <div>
              <i className='gray fa fa-toggle-up fa-lg mr2' />
              <span>{title}</span>
            </div>
            : <div>
              <i className='gray fa fa-toggle-down fa-lg mr2' />
              <span>{title}</span>
            </div>}
        </div>
        <div className={cn(!show && 'dn')}>
          {children}
        </div>
      </div>
    )
  }
}

export default HideToggle
