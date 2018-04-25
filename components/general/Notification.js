import styled from 'styled-components'
import { Component } from 'react'
import redirect from '../../lib/Redirect'

const NotificationAnimation = styled.div.attrs({
  className: 'fixed top-0 f4 left-0 w-100 white front-three'
})`
background: ${props => (props.error ? 'red' : 'green')};
transform: translateY(${props => (props.error || props.success ? '0px' : '-70px')});
transition: transform .3s ease-in;
`

class Notification extends Component {
  shut = () => {
    setTimeout(() => {
      this.props.close()
      if (this.props.closeModal) this.props.closeModal()
      else redirect({}, this.props.redirectTo)
    }, 2500)
  }

  componentDidUpdate () {
    if (this.props.error && this.props.auto) {
      this.shut()
    }
    if (this.props.success && this.props.auto) {
      this.shut()
    }
  }

  render () {
    let { error, close, success, closeModal } = this.props
    return (
      <NotificationAnimation success={success} error={error}>
        <div className='ml3 fl pv3'>
          {error && <div>{error.graphQLErrors[0].message}</div>}
          {success && <div>{success}</div>}
        </div>
        <div onClick={close} className='fr pa3'>
          <i className='fa fa-times' />
        </div>
      </NotificationAnimation>
    )
  }
}

export default Notification
