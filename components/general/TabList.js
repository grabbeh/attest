import react, { Component } from 'react'

class TabList extends Component {
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
