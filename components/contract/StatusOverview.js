import Moment from 'react-moment'
import moment from 'moment'
import { Component } from 'react'
import ClearFix from '../styles/ClearFix'

class StatusOverview extends Component {
  createDiff = (earlierDate, laterDate) => {
    let { statuses } = this.props
    let first = moment(earlierDate)
    let last = moment(laterDate)
    return last.diff(first, 'days') * 20
  }

  supplementStatuses = statuses => {
    let copy = _.cloneDeep(statuses)
    return _.map(copy, (s, i) => {
      if (copy[i + 1]) {
        s.diff = this.createDiff(copy[i].date, copy[i + 1].date)
      }
      console.log(s)
      return s
    })
  }

  render () {
    let updated = this.supplementStatuses(this.props.statuses)
    let { statuses } = this.props
    return (
      <ul className='bl bw2 mt3 f4 list ma0 pa0'>
        {updated.map((s, i) => (
          <li key={i} className='mw7 mb3 dark-gray'>
            <i className='mr2 pt2 status-ml fl fa fa-circle' />
            <div
              className='fl white pv2 ph3'
              style={{
                backgroundColor: `${s.color}`,
                marginBottom: `${s.diff}px`
              }}
            >

              {s.name}
            </div>
            <div className='ml3 pt2 fl'>
              <Moment format='DD MMMM YYYY'>{s.date}</Moment>
            </div>
            <ClearFix />
          </li>
        ))}
      </ul>
    )
  }
}

export default StatusOverview
