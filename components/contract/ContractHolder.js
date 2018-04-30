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
    <div className='ml8-l mt2 mt0-l w-70-l w-100'>
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <i className='fa fa-bell mr0 mr2-ns' />
              <div className='di-ns dn'>Notifications</div>
            </Tab>
            <Tab>
              <i className='fa fa-signal mr0 mr2-ns' />
              <div className='di-ns dn'>Status history</div>
            </Tab>
            <Tab>
              <i className='fa fa-comment mr0 mr2-ns' />
              <div className='di-ns dn'>Comments</div>
            </Tab>
          </TabList>
          <ClearFix />
          <TabPanels>
            <ul className='list mt3 ma0 pa0'>
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
