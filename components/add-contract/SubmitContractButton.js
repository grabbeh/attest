import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import GET_CONTRACTS from '../../queries/ContractsQuery'
import ADD_CONTRACT from '../../queries/AddContractMutation'
import FormButton from '../styles/FormButton'
import _ from 'lodash'
import Notification from '../general/Notification'

const SubmitContractButton = props => {
  let [success, setSuccess] = useState(null)
  const closeNotification = () => {
    setSuccess(false)
  }

  let { contract, validate, closeModal, text } = props
  const [addContract] = useMutation(ADD_CONTRACT, {
    update (cache, res) {
      let contract = res.data.addContract
      let { id } = contract
      // if closeModal present then editable contract
      if (closeModal) {
        let data = cache.readQuery({ query: GET_CONTRACTS })
        _.extend(_.find(data.contracts, { id }), contract)
        cache.writeQuery({ query: GET_CONTRACTS, data })
      } else {
        // else new contract so push into cache
        let { contracts } = cache.readQuery({ query: GET_CONTRACTS })
        cache.writeQuery({
          query: GET_CONTRACTS,
          data: { contracts: contracts.concat([contract]) }
        })
      }
    },
    onCompleted () {
      setSuccess('Contract updated')
    }
  })

  return (
    <>
      <FormButton
        onClick={e => {
          e.preventDefault()
          let err = false
          if (validate) err = validate()
          if (!err) {
            addContract({ variables: { id: contract.id, contract } })
          }
        }}
        text={text}
      />
      <Notification
        close={closeNotification}
        success={success}
        auto
        closeModal={closeModal}
      />
    </>
  )
}

export default SubmitContractButton
