import ContractSquareList from './ContractSquareList'
import _ from 'lodash'
import react from 'react'
import StatusBar from './StatusBar'
import DateSummary from './DateSummary'
import Flex from '../styles/Flex'
import ClearFix from '../styles/ClearFix'

class SummaryBox extends react.Component {
  render () {
    let o = _.groupBy(this.props.contracts, 'currentStatus.name')
    let res = _.keys(o).map(k => {
      let status = {
        name: o[k][0].currentStatus.name,
        color: o[k][0].currentStatus.color
      }
      return {
        status,
        volume: o[k].length
      }
    })

    let arr = _.values(o)
    let { contracts, filters } = this.props
    const { startDate, endDate } = filters.dateRange
    return (
      <div className='pv3 f4'>
        {contracts &&
          contracts.length > 0 &&
          <div>
            <Flex>
              <div className='b mb1'>Summary</div>
              <div className='ml3'>
                {contracts.length}
                <DateSummary startDate={startDate} endDate={endDate} />
              </div>
            </Flex>
            <Flex>
              <div className='flex flex-wrap list w-100 mb2 pa0 ma0'>
                {res.map(r => (
                  <div key={r.status.name} className='fl mr4'>
                    <StatusBar status={r.status} volume={r.volume} />
                  </div>
                ))}
              </div>
              <ClearFix />
              <div>
                {arr.map(contracts => (
                  <div key={contracts[0].id} className='fl'>
                    <ContractSquareList contracts={contracts} />
                  </div>
                ))}
              </div>
            </Flex>
          </div>}
      </div>
    )
  }
}

export default SummaryBox
