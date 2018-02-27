import react, { Component } from 'react'
import * as PropTypes from 'prop-types'

class TabList extends Component {
  static contextTypes = {
    onSelectTab: PropTypes.func.isRequired
  }
  render () {
    const { activeIndex } = this.context
    const children = react.Children.map(this.props.children, (child, index) => {
      return react.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.context.onSelectTab(index)
      })
    })
    return (
      <div className='tabs'>
        {children}
      </div>
    )
  }
}

export default TabList
