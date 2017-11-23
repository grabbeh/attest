import React from 'react'
import { graphql } from 'react-apollo'
import UPDATE_CONTRACT_MUTATION from '../../queries/UpdateContractMutation'

const SubmitEditButton = ({ updateContract, id, contract }) => {
  return (
    <button onClick={() => updateContract(id, contract)}>
      Submit
    </button>
  )
}

export default graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ mutate }) {
    return {
      updateContract (id, contract) {
        return mutate({
          variables: { id: id, contract: contract }
        })
      }
    }
  }
})(SubmitEditButton)
