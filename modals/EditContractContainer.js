import { Query } from 'react-apollo'
import AddContractForm from '../components/add-contract/AddContract'
import Loading from '../components/general/Loading'
import Modal from 'react-modal'
import Box from '../components/styles/Box'
import _ from 'lodash'
import FadeRightDiv from '../components/styles/FadeRightDiv'
import EDIT_CONTRACT_QUERY from '../queries/EditContractQuery'

if (process.browser) Modal.setAppElement('body')

const EditContractContainer = props => {
  if (props.loading) return <Loading />
  return (
    <FadeRightDiv>
      <Modal
        className='content ml7-l ml5-m ml4-ns mw7 mt5-l mt0'
        overlayClassName='overlay'
        onRequestClose={props.closeModal}
        isOpen={props.isOpen}
      >
        <Box>
          {props.isOpen
            ? <Query query={EDIT_CONTRACT_QUERY}>
              {({ loading, error, data: { masterEntity, allUsers } }) => {
                if (loading) return <Loading />
                if (error) return 'Error'
                return (
                  <AddContractForm
                    closeModal={props.closeModal}
                    isOpen={props.isOpen}
                    allUsers={allUsers}
                    masterEntity={masterEntity}
                    contract={props.contract}
                    title='Edit Contract'
                    handleContract={props.handleContract}
                    />
                )
              }}
            </Query>
            : null}
        </Box>
      </Modal>
    </FadeRightDiv>
  )
}

export default EditContractContainer
