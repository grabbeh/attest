import react from 'react'
import LoginModal from '../../modals/LoginModal'

class Login extends react.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render () {
    return (
      <div>
        <div className='pointer' onClick={() => this.openModal()}>Login</div>
        <LoginModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default Login
