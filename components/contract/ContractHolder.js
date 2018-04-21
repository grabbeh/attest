import ContractBox from '../contracts/ContractBox'
import Moment from 'react-moment'
import Notification from '../notifications/Notification'
import Tabs from '../general/Tabs'
import Tab from '../general/Tab'
import ClearFix from '../styles/ClearFix'
import TabPanels from '../general/TabPanels'
import TabList from '../general/TabList'
import Box from '../styles/Box'

const ContractHolder = ({ contract, notificationsForContract }) => (
  <Box>
    <div className='fixed w-25 mt2 f4 bg-light-gray dark-gray pa3'>
      <ContractBox contract={contract} />
    </div>
    <div className='ml8'>
      <div>
        <Tabs>
          <TabList>
            <Tab><div className='pointer'>Notifications</div></Tab>
            <Tab><div className='pointer'>Status history</div></Tab>
          </TabList>
          <ClearFix />
          <TabPanels>
            <ul className='list ma0 pa0'>
              {notificationsForContract.map((n, i) => (
                <Notification key={i} {...n} />
              ))}
            </ul>
            <ul className='mt3 f4 list ma0 pa0'>
              {contract.statuses.map((s, i) => (
                <li key={i} className='pa3 mw7 bg-light-gray mb3 dark-gray'>
                  {` ${s.name} -`}
                  <Moment format='DD MMMM YYYY'>{s.date}</Moment>
                </li>
              ))}
            </ul>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </Box>
)

export default ContractHolder
