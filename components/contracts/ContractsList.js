import ContractBox from './ContractBox'
import ContractHolder from './ContractHolder'
import Fade from '../styles/FadeTransition'
import { TransitionGroup } from 'react-transition-group'

const ContractsList = props => (
  <div>
    {props.contracts.length > 0
      ? <div>
        <div className='b f4 mb2'>Contracts</div>
        <section className='mb3'>
          <div className='flex flex-wrap list pa0 ma0'>
            {props.contracts.map((contract, index) => (
              <Fade key={contract.id}>
                <div key={contract.id} className='mb3 w-50-ns w-25-l w-100'>
                  <ContractHolder key={contract.id} index={index}>
                    <ContractBox contract={contract} />
                  </ContractHolder>
                </div>
              </Fade>
              ))}
          </div>
        </section>
      </div>
      : <div className='f4'>
          No matching contracts
        </div>}
  </div>
)

export default ContractsList
