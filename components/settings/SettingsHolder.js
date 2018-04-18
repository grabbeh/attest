import { Component } from 'react'
import SettingsForm from './SettingsForm'
import UsersHolder from './UsersHolder'
import Tabs from '../general/Tabs'
import TabList from '../general/TabList'
import Tab from '../general/Tab'
import TabPanels from '../general/TabPanels'
import ClearFix from '../styles/ClearFix'
import WideCenterBox from '../styles/WideCenterBox'

class SettingsHolder extends Component {
  render () {
    return (
      <WideCenterBox>
        <div className='flex flex-wrap'>
          <Tabs>
            <TabList>
              <Tab><div className='pointer'>Filters</div></Tab>
              <Tab><div className='pointer'>Users</div></Tab>
            </TabList>
            <ClearFix />
            <TabPanels>
              <SettingsForm updateMasterEntity={this.props.updateMasterEntity}  masterEntity={this.props.masterEntity} />
              <UsersHolder allUsers={this.props.allUsers} />
            </TabPanels>
          </Tabs>
        </div>
      </WideCenterBox>
    )
  }
}

export default SettingsHolder
