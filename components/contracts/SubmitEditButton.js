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
    return {
      updateContract () {
        return mutate({
          variables: { id: ownProps.id, contract: ownProps.contract },
          update: (store, response) => {
            let contract = response.data.updateContract
            const data = store.readQuery({ query: CONTRACTS_QUERY })
            _.extend(_.findWhere(data.contracts, { id: ownProps.id }), contract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
            ownProps.closeModal()
          }
        })
      }
    }
  }
})(SubmitEditButton)
