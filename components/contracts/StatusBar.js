import cn from 'classnames'

const StatusBar = ({ status: { name, color }, volume, bold }) => (
  <div
    style={{ borderBottomColor: color }}
    className={cn('bw1 bb mt1', 'pb1', bold && 'b')}
  >
    {volume ? <span>{` ${volume} `}</span> : ''}
    {name}
  </div>
)

export default StatusBar
