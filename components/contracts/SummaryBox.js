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
    // For status bar
    var resFour = _.keys(_.groupBy(_.map(contracts, function(x){
        return x.currentStatus.name}))).map(function(i){
          return {
            status: i,
            volume: i.length
          }
        })
    
    
    let arr = _.values(o)
    let { contracts, filters } = this.props
    const { startDate, endDate } = filters.dateRange
    return (
      <div className='h-100 bg-white mt3 mt0-ns pa3 ba b--black-20'>
        <div className='b f4 bb b--black-20 bw1 pb2'>Summary</div>
        <div className='mt3 f5'>
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
