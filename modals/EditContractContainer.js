import UPDATE_CONTRACT_MUTATION from '../queries/UpdateContractMutation'
import CONTRACTS_QUERY from '../queries/ContractsQuery'
import { graphql, compose } from 'react-apollo'
import AddContractForm from '../components/add-contract/AddContract'
import Loading from '../components/general/Loading'
import Modal from 'react-modal'
import Box from '../components/styles/Box'
import _ from 'lodash'
import FadeRightDiv from '../components/styles/FadeRightDiv'

const EditContractContainer = props => {
  if (!props.loading) {
    return (
      <FadeRightDiv>
        <Modal
          className='content ml7-l ml5-m ml4-ns mw7 mt5-l mt0'
          overlayClassName='overlay'
          onRequestClose={props.closeModal}
          isOpen={props.isOpen}
        >
          <Box>
            <AddContractForm
              closeModal={props.closeModal}
              isOpen={props.isOpen}
              masterEntity={props.masterEntity}
              contract={props.contract}
              title='Edit Contract'
              handleContract={props.handleContract}
            />
          </Box>
        </Modal>
      </FadeRightDiv>
    )
  }
  return <Loading />
}

const EditContractMutation = graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      handleContract (contract, closeModal) {
        let id = contract.id
        return mutate({
          variables: { contract },
          update: (store, response) => {
            closeModal()
            let contract = response.data.updateContract
            let data = store.readQuery({ query: CONTRACTS_QUERY })
            _.extend(_.find(data.contracts, { id }), contract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
          }
        })
      }
    }
  }
})

const EditFormWithMutation = compose(EditContractMutation)(
  EditContractContainer
)

export default EditFormWithMutation
