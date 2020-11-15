import { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import CREATE_ACCOUNT_MUTATION from '../../queries/CreateAccountMutation'
import FormButton from '../styles/FormButton'
import Input from '../general/Input'
import ClearFix from '../styles/ClearFix'
import FormTitle from '../styles/FormTitle'
import CenterBox from '../styles/CenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'
import Notification from '../general/Notification'

class CreateAccountForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      userName: ''
    }
  }

  saveToState = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    let { email, userName, name, password, error } = this.state
    let { saveToState } = this
    return (
      <FadeRightDiv>
        <CenterBox>
          <FormTitle title='Create new account' />
          <form>
            <div className='mt2'>
              <Input
                value={name}
                name='name'
                onChange={saveToState}
                label='Company name'
                autoComplete='organization'
              />
            </div>
            <div className='mt2'>
              <Input
                value={userName}
                name='userName'
                onChange={saveToState}
                label='User name'
                autoComplete='username'
              />
            </div>
            <div className='mt2'>
              <Input
                value={email}
                name='email'
                onChange={saveToState}
                label='Email'
                autoComplete='email'
              />
            </div>
            <div className='mt2'>
              <Input
                value={password}
                name='password'
                onChange={saveToState}
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </div>
            <CreateAccountButton {...this.state} />
            <ClearFix />
            <ClearFix />
          </form>
        </CenterBox>
      </FadeRightDiv>
    )
  }
}

class CreateAccountButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false })
  }

  render () {
    let { name, userName, email, password } = this.props
    return (
      <Mutation
        mutation={CREATE_ACCOUNT_MUTATION}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'User created' })
        }}
      >
        {(createAdminAccount, { data, error, loading }) => {
          return (
            <Fragment>
              <FormButton
                text='SUBMIT'
                onClick={e => {
                  e.preventDefault()
                  createAdminAccount({
                    variables: { name, userName, email, password }
                  })
                }}
              />
              <Notification
                close={this.closeNotification}
                error={this.state.error}
                success={this.state.success}
                auto
                redirectTo='/login'
              />
            </Fragment>
          )
        }}
      </Mutation>
    )
  }
}

export default CreateAccountForm
