import React from 'react'
import SlimMenu from './SlimMenu'
import Flex from '../styles/Flex'

class SideColumn extends React.Component {
  render () {
    return (
      <Flex>
        <div className='w-5'>
          <div className='pa3 pt4 bg-dark-gray height fixed'>
            <div>
              <SlimMenu />
            </div>
          </div>
        </div>
        <div className='w-90'>
          {this.props.children}
        </div>
      </Flex>
    )
  }
}

export default SideColumn
