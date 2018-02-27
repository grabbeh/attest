import react, { Component } from 'react'

class Tabs extends Component {
  state = {
    activeIndex: 0
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
