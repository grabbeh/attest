import Moment from 'react-moment'
import { Fragment } from 'react'

const DateSummary = ({ startDate, endDate }) => (
  <Fragment>
    {startDate && startDate.isValid()
      ? <span>
        {` between `}
        <Moment format='D MMMM YYYY' date={startDate} />
        {` and `}
        <Moment format='D MMMM YYYY' date={endDate} />
      </span>
      : <span>{` for all time`}</span>}
  </Fragment>
)

export default DateSummary
