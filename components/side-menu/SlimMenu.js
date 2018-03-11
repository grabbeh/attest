import React from 'react'
import MenuItem from './MenuItem'

const SlimMenu = ({ selectedUrl }) => (
  <div>
    <ul className='list ma0 pa0'>
      <MenuItem
        selectedUrl={selectedUrl}
        url='/contracts'
        icon='fa fa-search fa-lg'
      />
      <MenuItem
        selectedUrl={selectedUrl}
        url='/add-contract'
        icon='fa fa-file-text-o fa-lg'
      />
      <MenuItem selectedUrl={selectedUrl} url='/' icon='fa fa-user-o fa-lg' />
      <MenuItem
        selectedUrl={selectedUrl}
        url='/settings'
        icon='fa fa-cog fa-lg'
      />
      <MenuItem selectedUrl={selectedUrl} url='/' icon='fa fa-bell-o fa-lg' />
      <MenuItem
        selectedUrl={selectedUrl}
        url='/'
        icon='fa fa-line-chart fa-lg'
      />
    </ul>
  </div>
)

export default SlimMenu
