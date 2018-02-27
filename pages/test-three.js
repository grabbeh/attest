import { Component } from 'react'
import Tabs from '../components/general/Tabs'
import TabList from '../components/general/TabList'
import Tab from '../components/general/Tab'
import TabPanels from '../components/general/TabPanels'
import TabPanel from '../components/general/TabPanel'

class TestThree extends Component {
  render () {
    return (
      <Tabs>
        <div>
          <TabList>
            <Tab><div>Car</div></Tab>
            <Tab><div>Hotel</div></Tab>
            <Tab><div>Flight</div></Tab>
          </TabList>
        </div>
        <TabPanels>
          <div>Content</div>
          <div>Content Two</div>
          <div>Content Three</div>
        </TabPanels>
      </Tabs>
    )
  }
}

export default TestThree
