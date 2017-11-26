import Contract from './Contract'

const ContractsList = ({ filteredContracts, data }) => (
  <div>
    {filteredContracts.length > 0
      ? <div>
        <div className='cf' />
        <section className='mt3 mb4'>
          <ul className='flex flex-wrap list pa0 ma0'>
            {filteredContracts.map(contract => (
              <Contract data={data} key={contract.id} contract={contract} />
              ))}
          </ul>
        </section>
      </div>
      : <div className='pa2 bg-light-red b black mt2'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
