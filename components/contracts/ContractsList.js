import Contract from './Contract'
import ContractHolder from './ContractHolder'
import cn from 'classnames'

const ContractsList = ({ contracts, data }) => (
  <div>
    {contracts.length > 0
      ? <div>
        <div className='cf' />
        <section className='mt3 mb4'>
          <ul className='flex flex-wrap list pa0 ma0'>
            {contracts.map((contract, index) => (
              <div className={cn('w-25-ns', 'w-100')}>
                <ContractHolder key={contract.id} index={index}>
                  <Contract
                    data={data}
                    key={contract.id}
                    contract={contract}
                    />
                </ContractHolder>
              </div>
              ))}
          </ul>
        </section>
      </div>
      : <div className='pa2 bg-haus b mt2'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
