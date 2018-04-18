import React from 'react'
import SlimMenu from './SlimMenu'
import Flex from '../styles/Flex'
import MenuAnimation from '../styles/MenuAnimation'

class SideColumn extends React.Component {
  render () {
    return (
      <Flex>
        <MenuAnimation showMenu={this.props.showMenu}>
          <SlimMenu selectedUrl={this.props.url} />
        </MenuAnimation>
        <div className='w-100'>
          {this.props.children}
        </div>
      </Flex>
    )
  }
}

export default SideColumn
