import cn from 'classnames'

const StatusBar = ({ status, volume, bold }) => (
  <div
    className={cn(
      'mt1',
      'pb1',
      bold && 'b',
      status === 'Executed' && 'bb',
      status === 'Instructed' && 'bb',
      status === 'Drafted' && 'bb',
      status === 'Approved' && 'bb',
      status === 'Executed' && 'bb--dark-pear',
      status === 'Instructed' && 'b--light-red',
      status === 'Drafted' && 'bb--orange',
      status === 'Approved' && 'bb--pear',
      status === 'Executed' && 'bw1',
      status === 'Instructed' && 'bw1',
      status === 'Drafted' && 'bw1',
      status === 'Approved' && 'bw1'
    )}
  >
    {volume ? <span>{` ${volume} `}</span> : ''}
    {status}
  </div>
)

export default StatusBar
