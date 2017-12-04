import React from 'react'
import { graphql } from 'react-apollo'
import UPDATE_CONTRACT_MUTATION from '../../queries/UpdateContractMutation'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import _ from 'underscore'

const SubmitEditButton = ({ updateContract }) => {
  const handleClick = e => {
    e.preventDefault()
    updateContract()
  }
  return (
    <button onClick={handleClick}>
      Submit
    </button>
  )
}

export default graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    const { closeModal, contract } = ownProps
    const id = contract.id
    return {
      updateContract () {
        return mutate({
          variables: { id, contract },
          update: (store, response) => {
            let updatedContract = response.data.updateContract
            const data = store.readQuery({ query: CONTRACTS_QUERY })
            _.extend(_.findWhere(data.contracts, { id }), updatedContract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
            closeModal()
          }
        })
      }
    }
  }
})(SubmitEditButton)
