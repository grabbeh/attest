import { Component, Fragment } from 'react'
import { graphql, Mutation } from 'react-apollo'
import LOGIN_MUTATION from '../../queries/LoginMutation'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'
import FormButton from '../styles/FormButton'
import Input from '../general/Input'
import ClearFix from '../styles/ClearFix'
import FormTitle from '../styles/FormTitle'
import CenterBox from '../styles/CenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'
import FormSection from '../styles/FormSection'
import Notification from '../general/Notification'
import Loading from '../general/Loading'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    if (this.props.user) {
      redirect({}, '/contracts')
    }
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  handleClick = e => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render () {
    return (
      <FadeRightDiv>
        <CenterBox>
          <FormTitle title='Login' />
          <form className='pt2'>
            <FormSection>
              <Input
                value={this.state.email}
                name='email'
                onChange={this.saveToState}
                label='Email'
                autoComplete='email'
              />
            </FormSection>
            <FormSection>
              <Input
                value={this.state.password}
                name='password'
                onChange={this.saveToState}
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </FormSection>
            <LoginButton client={this.props.client} {...this.state} />
            <ClearFix />
          </form>
          <div />
        </CenterBox>
      </FadeRightDiv>
    )
  }
}

class LoginButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false, success: false })
  }

  render () {
    let { email, password } = this.props
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        update={(store, response) => {
          document.cookie = cookie.serialize('token', response.data.login, {
            maxAge: 30 * 24 * 60 * 60
          })
          this.props.client.resetStore().then(() => {
            redirect({}, '/contracts')
          })
        }}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'Redirecting...' })
        }}
      >
        {(login, { data, error, loading }) => {
          return (
            <Fragment>
              <FormButton
                text='SUBMIT'
                onClick={e => {
                  e.preventDefault()
                  login({
                    variables: { email, password }
                  })
                }}
              />
              <Notification
                close={this.closeNotification}
                error={this.state.error}
                success={this.state.success}
                redirectTo='/contracts'
              />
            </Fragment>
          )
        }}
      </Mutation>
    )
  }
}

export default LoginForm
