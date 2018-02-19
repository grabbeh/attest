import UPDATE_CONTRACT_MUTATION from '../queries/UpdateContractMutation'
import CONTRACTS_QUERY from '../queries/ContractsQuery'
import { graphql, compose } from 'react-apollo'
import AddContractForm from '../components/add-contract/AddContract'
import Loading from '../components/general/Loading'
import Modal from 'react-modal'
import Box from '../components/styles/Box'
import _ from 'lodash'

const EditContractContainer = props => {
  if (!props.loading) {
    return (
      <Modal
        className='content'
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
            let updatedContract = response.data.handleContract
            let data = store.readQuery({ query: CONTRACTS_QUERY })
            _.extend(_.find(data.contracts, { id }), updatedContract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
            closeModal()
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
