import { Component } from 'react'
import * as PropTypes from 'prop-types'

class TabPanels extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired
  }
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
