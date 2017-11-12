import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import _ from 'underscore'
import ContractsQuery from './ContractsQuery'

function DeleteButton ({ deleteContract, id }) {
  return (
    <button
      className='f6 link dim mb2 dib light-gray bg-dark-gray'
      onClick={() => deleteContract(id)}
    >
      <i className='pointer fa fa-trash-o' />
    </button>
  )
}

const DELETE_CONTRACT_MUTATION = gql`
  mutation deleteContract($id: ID!) {
    deleteContract(id: $id) {
      id
    }
  }
`

export default graphql(DELETE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      deleteContract (id) {
        return mutate({
          variables: { id },
          update: (store, response) => {
            const data = store.readQuery({ query: ContractsQuery })
            let copy = data.contracts
            const revisedContracts = _.without(
              copy,
              _.findWhere(copy, {
                id: ownProps.id
              })
            )
            data.contracts = revisedContracts
            store.writeQuery({ query: ContractsQuery, data })
          }
        })
      }
    }
  }
})(DeleteButton)
