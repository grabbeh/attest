import ContractSquareList from './ContractSquareList'
import _ from 'lodash'
import react from 'react'
import StatusBar from './StatusBar'
import Moment from 'react-moment'
import Flex from '../styles/Flex'

class SummaryBox extends react.Component {
  render () {
    let o = _.groupBy(this.props.contracts, 'currentStatus')
    let res = _.keys(o).map(k => {
      return {
        status: k,
        volume: o[k].length
      }
    })
    let arr = _.values(o)
    let { contracts, filters } = this.props
    const { startDate, endDate } = filters.dateRange
    return (
      <div className='h-100 bg-haus mt3 mt0-ns pa3'>
        <div className='b f4 bb bw1 pb2'>Summary</div>
        <div className='mt3 f5 b'>
          {`${contracts.length}`}
          {startDate && startDate.isValid()
            ? <span>
              {` between `}
              <Moment format='D MMMM YYYY' date={startDate} />
              {` and `}
              <Moment format='D MMMM YYYY' date={endDate} />
            </span>
            : <span>{` for all time`}</span>}
        </div>
        <Flex>
          <ul className='w-100 mb2 list pa0 ma0'>
            {res.map(r => (
              <li key={r.status} className='fl mr4'>
                <StatusBar status={r.status} volume={r.volume} />
              </li>
            ))}

          </ul>
          <div className='cf:after' />
          <div>
            {arr.map(contracts => (
              <div key={contracts[0].id}>
                <ContractSquareList contracts={contracts} />
              </div>
            ))}
          </div>
        </Flex>
      </div>
    )
  }
}

export default SummaryBox
