import react from 'react'
import Modal from 'react-modal'
import LoginButton from '../components/contracts/LoginButton'
import _ from 'underscore'
import __ from 'lodash'
import cn from 'classnames'

class LoginModal extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount () {}

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { password, email } = this.state
    let { isOpen, closeModal } = this.props
    return (
      <div>
        <Modal
          className='content ma3 pa0 w-50-ns w-100 center'
          overlayClassName='overlay'
          isOpen={isOpen}
          onRequestClose={closeModal}
        >
          <div className='pa3 ma0 bg-haus'>
            <div className='fr'>
              <button
                className='f6 link dim mb2 ph0 dib bg-haus'
                onClick={closeModal}
              >
                <i className='pointer  fa fa-window-close fa-lg' />
              </button>
            </div>
            <div className='b pb2 bb bw1'>Login</div>
            <form>
              <div className='mt2'>
                <input
                  className='pa2'
                  value={this.state.email}
                  name='email'
                  onChange={this.saveToState}
                  placeholder='Email'
                />
              </div>
              <div className='mt2'>
                <input
                  className='pa2'
                  value={this.state.password}
                  name='password'
                  onChange={this.saveToState}
                  placeholder='password'
                  type='password'
                />
              </div>
              <div className='mt2'>
                <LoginButton
                  email={email}
                  password={password}
                  closeModal={this.props.closeModal}
                />
              </div>
            </form>
          </div>
        </Modal>

      </div>
    )
  }
}

export default LoginModal
