import Contract from './Contract'
import ContractHolder from './ContractHolder'

const ContractsList = props => (
  <div>
    {props.contracts.length > 0
      ? <div>
        <div className='cf' />
        <section className='mv3'>
          <ul className='flex flex-wrap list pa0 ma0'>
            {props.contracts.map((contract, index) => (
              <div key={contract.id} className='mb3 w-50-ns w-25-l w-100'>
                <ContractHolder index={index}>
                  <Contract
                    masterEntity={props.masterEntity}
                    contract={contract}
                    />
                </ContractHolder>
              </div>
              ))}
          </ul>
        </section>
      </div>
      : <div className='ba b--black-20 pa3 f4 bg-white b mt3'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
