import React from 'react'
import { graphql } from 'react-apollo'
import UPDATE_CONTRACT_MUTATION from '../../queries/UpdateContractMutation'

const SubmitEditButton = ({ updateContract, id, contract }) => {
  const handleClick = e => {
    e.preventDefault()
    updateContract(id, contract)
  }

  return (
    <button onClick={handleClick}>
      Submit
    </button>
  )
}

export default graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      updateContract (id, contract) {
        contract.assignedTo = contract.assignedTo.id
        return mutate({
          variables: { id: id, contract: contract },
          update: (store, response) => {
            console.log(response)
            // TODO: Update cache with revised information + optimistic response
            ownProps.closeModal()
          }
        })
      }
    }
  }
})(SubmitEditButton)
