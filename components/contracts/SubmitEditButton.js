import React from 'react'
import { graphql } from 'react-apollo'
import _ from 'underscore'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import UPDATE_CONTRACT_MUTATION from '../../queries/UpdateContractMutation'

const SubmitEditButton = ({ updateContract, contract }) => {
  return (
    <button onClick={() => updateContract(contract)}>
      Submit
    </button>
  )
}

export default graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      updateContract (contract) {
        return mutate({
          variables: { contract }
        })
      }
    }
  }
})(SubmitEditButton)
