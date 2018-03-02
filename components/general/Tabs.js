import react, { Component } from 'react'
import * as PropTypes from 'prop-types'

class Tabs extends Component {
  static childContextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  }

  state = {
    activeIndex: null
  }

  getChildContext () {
    return {
      activeIndex: this.state.activeIndex,
      onSelectTab: this.selectTabIndex
    }
  }

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  render () {
    return (
      <div className=''>
        {this.props.children}
      </div>
    )
  }
}

export default Tabs
