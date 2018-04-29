import ContractBox from '../contracts/ContractBox'
import StatusOverview from './StatusOverview'
import Notification from '../notifications/Notification'
import Tabs from '../general/Tabs'
import Tab from '../general/Tab'
import ClearFix from '../styles/ClearFix'
import TabPanels from '../general/TabPanels'
import TabList from '../general/TabList'
import Box from '../styles/Box'
import CommentEditor from './CommentEditor'

const ContractHolder = ({ contract, notificationsForContract, user }) => (
  <Box>
    <div className='fixed-l w-25-l w-100 mt2 f4 bg-light-gray dark-gray pa3'>
      <ContractBox contract={contract} />
    </div>
    <div className='ml8-l mt0-l w-70-l w-100'>
      <div>
        <Tabs>
          <TabList>
            <Tab>Notifications</Tab>
            <Tab>Status history</Tab>
            <Tab>Comments</Tab>
          </TabList>
          <ClearFix />
          <TabPanels>
            <ul className='list ma0 pa0'>
              {notificationsForContract.map((n, i) => (
                <Notification key={i} {...n} />
              ))}
            </ul>
            <StatusOverview statuses={contract.statuses} />
            <CommentEditor user={user} contract={contract} />
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </Box>
)

export default ContractHolder
