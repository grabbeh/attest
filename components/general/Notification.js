import styled from 'styled-components'
import { Component } from 'react'

const NotificationAnimation = styled.div.attrs({
  className: 'fixed top-0 left-0 bg-red w-100 white front-two'
})`
transform: translateY(${props => (props.error ? '0px' : '-70px')});
transition: transform .3s ease-in;
`

class Notification extends Component {
  componentDidUpdate () {
    if (this.props.error && this.props.auto) {
      setTimeout(() => {
        this.props.close()
      }, 5000)
    }
  }
  render () {
    let { error, close } = this.props

    return (
      <NotificationAnimation error={error}>
        <div className='ml3 fl pv3'>
          {error && <div>{error.graphQLErrors[0].message}</div>}
        </div>
        <div onClick={close} className='fr pa3'>
          <i className='fa fa-times' />
        </div>
      </NotificationAnimation>
    )
  }
}

export default Notification
