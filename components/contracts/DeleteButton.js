import { Mutation } from 'react-apollo'
import { Component, Fragment } from 'react'
import _ from 'lodash'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import DELETE_CONTRACT_MUTATION from '../../queries/DeleteContractMutation'
import Notification from '../general/Notification'

class DeleteButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ success: false })
  }

  render () {
    let { id } = this.props
    return (
      <Mutation
        mutation={DELETE_CONTRACT_MUTATION}
        update={store => {
          try {
            const data = store.readQuery({ query: CONTRACTS_QUERY })
            let copy = data.contracts
            const revisedContracts = _.without(copy, _.find(copy, { id }))
            data.contracts = revisedContracts
            store.writeQuery({ query: CONTRACTS_QUERY, data })
          } catch (e) {}
        }}
        onCompleted={data => {
          this.setState({ success: 'Contract deleted' })
        }}
      >
        {(deleteContract, { data }) => (
          <Fragment>
            <button
              className='bg-light-gray link dim ph0 dib'
              onClick={() => deleteContract({ variables: { id } })}
            >
              <i className='pointer fa fa-trash-o' />
            </button>
            <Notification
              close={this.closeNotification}
              success={this.state.success}
              auto
              redirectTo='/contracts'
            />
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default DeleteButton
