import cn from 'classnames'

const SummaryBox = ({ total, contracts }) => (
  <div className='bg-haus mt3 mt0-ns w-100 pa3'>
    <div className='b f4 bb pb2'>Summary</div>
    <div className='mt3 mb3 f5 b'>{`Total: ${total}`}</div>
    <div className='flex flex-wrap'>
      {contracts.map(contract => (
        <div
          key={contract.id}
          className={cn(
            'w1',
            'h1',
            'mr1',
            'mb1',
            contract.currentStatus === 'Executed' && 'bg-dark-pear',
            contract.currentStatus === 'Instructed' && 'bg-light-red',
            contract.currentStatus === 'Drafted' && 'bg-orange',
            contract.currentStatus === 'Approved' && 'bg-pear'
          )}
        />
      ))}
    </div>
  </div>
)

export default SummaryBox
