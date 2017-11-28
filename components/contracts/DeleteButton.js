import React from 'react'
import { graphql } from 'react-apollo'
import _ from 'underscore'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import DELETE_CONTRACT_MUTATION from '../../queries/DeleteContractMutation'

const DeleteButton = ({ deleteContract, id }) => {
  return (
    <button
      className='bg-haus f6 link dim mb2 ph0 dib'
      onClick={() => deleteContract(id)}
    >
      <i className='pointer fa fa-trash-o' />
    </button>
  )
}

const DeleteButtonMutation = graphql(DELETE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      deleteContract (id) {
        return mutate({
          variables: { id },
          update: store => {
            const data = store.readQuery({ query: CONTRACTS_QUERY })
            let copy = data.contracts
            const revisedContracts = _.without(
              copy,
              _.findWhere(copy, {
                id: ownProps.id
              })
            )
            data.contracts = revisedContracts
            store.writeQuery({ query: CONTRACTS_QUERY, data })
          }
        })
      }
    }
  }
})(DeleteButton)

export default DeleteButtonMutation
