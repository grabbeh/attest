import React from 'react'
import SlimMenu from './SlimMenu'
import Flex from '../styles/Flex'
import MenuAnimation from '../styles/MenuAnimation'
import PageAnimation from '../styles/PageAnimation'

class SideColumn extends React.Component {
  render () {
    return (
      <Flex>
        <MenuAnimation showMenu={this.props.showMenu}>
          <SlimMenu selectedUrl={this.props.url} />
        </MenuAnimation>
        <PageAnimation showMenu={this.props.showMenu}>
          {this.props.children}
        </PageAnimation>
      </Flex>
    )
  }
}

export default SideColumn
