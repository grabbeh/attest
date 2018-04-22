import { Component, Fragment } from 'react'
import { graphql, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import CREATE_ACCOUNT_MUTATION from '../../queries/CreateAccountMutation'
import redirect from '../../lib/Redirect'
import FormButton from '../styles/FormButton'
import Input from '../general/Input'
import Error from '../general/Error'
import ClearFix from '../styles/ClearFix'
import FormTitle from '../styles/FormTitle'
import CenterBox from '../styles/CenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'
import { Consumer } from '../../lib/Context'
import Notification from '../general/Notification'

class CreateAccountForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  render () {
    let { email, name, password, error } = this.state
    return (
      <FadeRightDiv>
        <CenterBox>
          <FormTitle title='Create new account' />
          <form>
            <div className='mt2'>
              <Input
                value={this.state.name}
                name='name'
                onChange={this.saveToState}
                label='Company name'
              />
            </div>
            <div className='mt2'>
              <Input
                value={this.state.email}
                name='email'
                onChange={this.saveToState}
                label='Email'
              />
            </div>
            <div className='mt2'>
              <Input
                value={this.state.password}
                name='password'
                onChange={this.saveToState}
                label='Password'
                type='password'
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
    error: null
  }

  closeNotification = () => {
    this.setState({ error: false })
  }

  render () {
    let { name, email, password } = this.props
    return (
      <Mutation
        mutation={CREATE_ACCOUNT_MUTATION}
        onError={error => {
          this.setState({ error })
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
                    variables: { name, email, password }
                  })
                }}
              />
              <Notification
                close={this.closeNotification}
                error={this.state.error}
                auto
              />
            </Fragment>
          )
        }}
      </Mutation>
    )
  }
}

export default CreateAccountForm
