import cn from 'classnames'

const StatusBar = ({ status }) => (
  <div
    className={cn(
      'mt1',
      'b',
      'pb1',
      status === 'Executed' && 'bb',
      status === 'Instructed' && 'bb',
      status === 'Drafted' && 'bb',
      status === 'Approved' && 'bb',
      status === 'Executed' && 'bb--dark-pear',
      status === 'Instructed' && 'b--light-red',
      status === 'Drafted' && 'bb--orange',
      status === 'Approved' && 'bb--pear',
      status === 'Executed' && 'bw3',
      status === 'Instructed' && 'bw3',
      status === 'Drafted' && 'bw3',
      status === 'Approved' && 'bw3'
    )}
  >
    {status}
  </div>
)

export default StatusBar
