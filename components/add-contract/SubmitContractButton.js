import { Mutation } from 'react-apollo'
import { Component, Fragment } from 'react'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import FormButton from '../styles/FormButton'
import _ from 'lodash'
import Notification from '../general/Notification'

class SubmitContractButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ success: false, error: false })
  }

  render () {
    let { contract, validate, closeModal, text } = this.props
    return (
      <Mutation
        mutation={ADD_CONTRACT_MUTATION}
        update={(store, response) => {
          let contract = response.data.addContract
          let { id } = contract
          // try/catch block used to silence error
          try {
            // if closeModal present then editable contract
            if (closeModal) {
              let data = store.readQuery({ query: CONTRACTS_QUERY })
              _.extend(_.find(data.contracts, { id }), contract)
              store.writeQuery({ query: CONTRACTS_QUERY, data })
            } else {
              // else new contract so push into cache
              let data = store.readQuery({ query: CONTRACTS_QUERY })
              data.contracts.push(contract)
              store.writeQuery({ query: CONTRACTS_QUERY, data })
            }
          } catch (e) {
            // console.log(e)
          }
        }}
        onCompleted={data => {
          this.setState({ success: 'Contract updated' })
        }}
      >
        {(addContract, { data }) => (
          <Fragment>
            <FormButton
              onClick={e => {
                e.preventDefault()
                let err = false
                if (validate) err = validate()
                if (!err) {
                  addContract({ variables: { contract } })
                }
              }}
              text={text}
            />
            <Notification
              close={this.closeNotification}
              success={this.state.success}
              auto
              closeModal={closeModal}
            />
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default SubmitContractButton
