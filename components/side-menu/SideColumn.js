import React from 'react'
import SlimMenu from './SlimMenu'
import ClearFix from '../../components/styles/ClearFix'

class SideColumn extends React.Component {
  render () {
    return (
      <div className='bg-dark-gray h-100'>
        <div className='ml3 pl1 mt3 fixed'>
          {this.props.active
            ? <i
              onClick={this.props.toggleMenu}
              className='gray fa fa-chevron-left fa-lg'
              />
            : <div>
              <i
                onClick={this.props.toggleMenu}
                className='gray fa fa-chevron-right fa-lg'
                />
              <ClearFix />
              <SlimMenu />
            </div>}
        </div>
      </div>
    )
  }
}

export default SideColumn
