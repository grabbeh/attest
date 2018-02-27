import { Component } from 'react'

class TabPanels extends Component {
  render () {
    const { children } = this.props
    const { activeIndex } = this.context
    return (
      <div className=''>
        {children[activeIndex]}
      </div>
    )
  }
}

export default TabPanels
