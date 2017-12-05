import React from 'react'
import { graphql } from 'react-apollo'
import LOGIN_MUTATION from '../../queries/LoginMutation'

const LoginButton = ({ login }) => {
  const handleClick = e => {
    e.preventDefault()
    login()
  }
  return (
    <button onClick={handleClick}>
      Submit
    </button>
  )
}

export default graphql(LOGIN_MUTATION, {
  props ({ ownProps, mutate }) {
    const { email, password, closeModal } = ownProps
    return {
      login () {
        return mutate({
          variables: { email, password },
          update: (store, response) => {
            localStorage.setItem('token', response.data.login)
            closeModal()
          }
        })
      }
    }
  }
})(LoginButton)
