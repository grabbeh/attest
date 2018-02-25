import React from 'react'
import SlimMenu from './SlimMenu'
import Flex from '../styles/Flex'

class SideColumn extends React.Component {
  render () {
    return (
      <Flex>
        <div>
          <div className='pa3 pt4 bg-dark-gray height fixed'>
            <SlimMenu />
          </div>
        </div>
        <div className='ml5 w-100'>
          {this.props.children}
        </div>
      </Flex>
    )
  }
}

export default SideColumn
