import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import redirect from '../../lib/Redirect'

const NotificationAnimation = styled.div.attrs({
  className: 'fixed top-0 f4 left-0 w-100 white front-three'
})`
  background: ${props => (props.error ? 'red' : 'green')};
  transform: translateY(
    ${props => (props.error || props.success ? '0px' : '-70px')}
  );
  transition: transform 0.3s ease-in;
`

const Notification = props => {
  let { closeModal, redirectTo } = props
  let [error, setError] = useState(false)
  let [success, setSuccess] = useState(false)
  useEffect(() => {
    setSuccess(props.success)
    setError(props.error)
    if (props.success) {
      if (closeModal) closeModal()
      if (redirectTo) redirect({}, redirectTo)
    }
  })

  return (
    <NotificationAnimation success={success} error={error}>
      <div className='ml3 fl pv3'>
        {error && <div>{error.graphQLErrors[0].message}</div>}
        {success && <div>{success}</div>}
      </div>
      <div
        onClick={() => {
          setError(false)
          setSuccess(false)
        }}
        className='fr pa3'
      >
        <i className='fa fa-times' />
      </div>
    </NotificationAnimation>
  )
}

export default Notification
