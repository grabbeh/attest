import Moment from 'react-moment'

const DateBar = ({ date }) => (
  <div>
    <i className='mr2 mt1 fa fa-check-square-o' />
    <Moment format='DD-MM-YYYY'>{date}</Moment>
  </div>
)

export default DateBar
