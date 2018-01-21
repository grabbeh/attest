import React from 'react'
import SlimMenu from './SlimMenu'
import ClearFix from '../../components/styles/ClearFix'

class SideColumn extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='bg-dark-gray h-100'>
        <div className='fixed ml2 tc pa2'>
          {this.props.active
            ? <i
              onClick={this.props.toggleMenu}
              className='mt2 gray fa fa-chevron-left fa-lg'
              />
            : <div>
              <i
                onClick={this.props.toggleMenu}
                className='mt2 gray fa fa-chevron-right fa-lg'
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
