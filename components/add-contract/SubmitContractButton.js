import { Mutation } from 'react-apollo'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import redirect from '../../lib/Redirect'
import FormButton from '../styles/FormButton'

const SubmitContractButton = ({ contract, validate, closeModal }) => (
  <Mutation
    mutation={ADD_CONTRACT_MUTATION}
    update={(store, response) => {
      let contract = response.data.addContract
      // try/catch block used to silence error
      try {
        let data = store.readQuery({ query: CONTRACTS_QUERY })
        data.contracts.push(contract)
        store.writeQuery({ query: CONTRACTS_QUERY, data })
      } catch (e) {
        // console.log(e)
      }
      redirect({}, '/contracts')
    }}
  >
    {(addContract, { data }) => (
      <FormButton
        onClick={e => {
          e.preventDefault()
          const err = validate()
          if (!err) {
            addContract({ variables: { contract } })
            if (closeModal) closeModal()
          }
        }}
        text='SUBMIT'
      />
    )}
  </Mutation>
)
export default SubmitContractButton
