import ContractBox from './ContractBox'
import ContractHolder from './ContractHolder'
import { CSSTransitionGroup } from 'react-transition-group'

const ContractsList = props => (
  <div>
    {props.contracts.length > 0
      ? <div>
        <div className='b f4 mb2'>Contracts</div>
        <section className='mb3'>
          <CSSTransitionGroup
            className='flex flex-wrap list pa0 ma0'
            component='ul'
            transitionName='example'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={500}
            transitionAppear
            >
            {props.contracts.map((contract, index) => (
              <div key={contract.id} className='mb3 w-50-ns w-25-l w-100'>
                <ContractHolder key={contract.id} index={index}>
                  <ContractBox
                    masterEntity={props.masterEntity}
                    contract={contract}
                    />
                </ContractHolder>
              </div>
              ))}
          </CSSTransitionGroup>
        </section>
      </div>
      : <div className='bg-light-gray pa3 f4 b mt3'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
