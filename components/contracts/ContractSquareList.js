import cn from 'classnames'

const ContractSquareList = ({ contracts }) => (
  <div>
    <div className='dim pointer'>
      {contracts.map(contract => (
        <div
          key={contract.id}
          className={cn(
            'fl',
            'w1',
            'h1',
            'mr1',
            'mb1',
            contract.currentStatus === 'Executed' && 'bg-dark-pear',
            contract.currentStatus === 'Instructed' && 'bg-light-red',
            contract.currentStatus === 'Drafted' && 'bg--orange',
            contract.currentStatus === 'Approved' && 'bg-pear'
          )}
        />
      ))}
    </div>
  </div>
)

export default ContractSquareList
