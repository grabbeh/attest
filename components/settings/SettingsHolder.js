import { Component } from 'react'
import SettingsForm from './SettingsForm'
import UserHolder from './UserHolder'
import Tabs from '../general/Tabs'
import TabList from '../general/TabList'
import Tab from '../general/Tab'
import TabPanels from '../general/TabPanels'
import ClearFix from '../styles/ClearFix'

class SettingsHolder extends Component {
  render () {
    return (
      <div className='pa3 flex flex-wrap'>
        <Tabs>
          <TabList>
            <Tab><div className='pointer'>Filters</div></Tab>
            <Tab><div className='pointer'>Users</div></Tab>
          </TabList>
          <ClearFix />
          <TabPanels>
            <SettingsForm
              updateMasterEntity={this.props.updateMasterEntity}
              masterEntity={this.props.masterEntity}
            />
            <UserHolder allUsers={this.props.allUsers} />
          </TabPanels>
        </Tabs>
      </div>
    )
  }
}

export default SettingsHolder
