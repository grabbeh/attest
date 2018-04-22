import { Component } from 'react'
import SlimMenu from './SlimMenu'
import Flex from '../styles/Flex'
import MenuAnimation from '../styles/MenuAnimation'
import { Consumer } from '../../lib/Context'

class SideColumn extends Component {
  render () {
    return (
      <Consumer>
        {context => {
          return (
            <Flex>
              <MenuAnimation showMenu={context.state.showMenu}>
                <SlimMenu selectedUrl={this.props.url} />
              </MenuAnimation>
              <div className='w-100'>
                {this.props.children}
              </div>
            </Flex>
          )
        }}
      </Consumer>
    )
  }
}

export default SideColumn
