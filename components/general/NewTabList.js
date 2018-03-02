import react, { Component } from 'react'
import * as PropTypes from 'prop-types'
import cn from 'classnames'
import Flex from '../styles/Flex'

class TabList extends Component {
  state = {
    activeIndex: null
  }

  selectIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  render () {
    const { activeIndex } = this.state
    const children = react.Children.map(this.props.children, (child, index) => {
      return react.cloneElement(child, {
        onSelect: () => this.selectIndex(index)
      })
    })

    return (
      <div>
        <Flex>
          {children}
        </Flex>
        {activeIndex &&
          <div className={cn('absolute', 'shadow-4', 'bg-white')}>
            {children[activeIndex].props.children}
          </div>}

      </div>
    )
  }
}

export default TabList
