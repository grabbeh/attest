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
      status === 'Executed' && 'b--green',
      status === 'Instructed' && 'b--light-red',
      status === 'Drafted' && 'b--light-yellow',
      status === 'Approved' && 'b--light-green',
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
