import ContractBox from './ContractBox'
import ContractHolder from './ContractHolder'

const ContractsList = props => (
  <div>
    {props.contracts.length > 0
      ? <div>
        <div className='b f4 mb2'>Contracts</div>
        <section className='mb3'>
          <ul className='flex flex-wrap list pa0 ma0'>
            {props.contracts.map((contract, index) => (
              <div key={contract.id} className='mb3 w-50-ns w-25-l w-100'>
                <ContractHolder index={index}>
                  <ContractBox
                    masterEntity={props.masterEntity}
                    contract={contract}
                    />
                </ContractHolder>
              </div>
              ))}
          </ul>
        </section>
      </div>
      : <div className='bg-light-gray pa3 f4 b mt3'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
