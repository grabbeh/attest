import React from 'react'
import MenuItem from './MenuItem'

const SlimMenu = () => (
  <div className='gray'>
    <ul className='list ma0 pa0'>
      <MenuItem url='/contracts' icon='fa fa-search fa-lg' />
      <MenuItem url='/add-contract' icon='fa fa-file-text-o fa-lg' />
      <MenuItem url='/' icon='fa fa-user-o fa-lg' />
      <MenuItem url='/' icon='fa fa-cog fa-lg' />
      <MenuItem url='/' icon='fa fa-bell-o fa-lg' />
      <MenuItem url='/' icon='fa fa-line-chart fa-lg' />
    </ul>
  </div>
)

export default SlimMenu
