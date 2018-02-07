const ContractSquareList = ({ contracts }) => (
  <div>
    <div className='dim pointer'>
      {contracts.map(contract => (
        <div
          key={contract.id}
          style={{ background: contract.currentStatus.color }}
          className='fl w1 h1 mr1 mb1'
        />
      ))}
    </div>
  </div>
)

export default ContractSquareList
