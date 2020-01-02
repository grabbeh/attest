import { Component, Fragment } from 'react'
import FormTitle from '../styles/FormTitle'
import FormSection from '../styles/FormSection'
import Input from '../general/Input'
import ClearFix from '../styles/ClearFix'
import Error from '../general/Error'
import AcceptInviteButton from './AcceptInviteButton'

class InviteHolder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props.user,
      password: '',
      repeatPassword: ''
    }
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  validate = () => {
    let isError = false
    const errors = {
      matchingPasswordError: ''
    }
    if (this.state.password !== this.state.repeatPassword) {
      isError = true
      errors.matchingPasswordError = 'Passwords do not match'
    }
    this.setState({
      ...this.state,
      ...errors
    })
    return isError
  }

  render () {
    let { password, repeatPassword } = this.state
    let { email, id } = this.props.user
    return (
      <Fragment>
        <FormTitle title={`Confirm invite for ${email}`} />
        <form>
          <FormSection>
            <Input
              value={password}
              name='password'
              onChange={this.saveToState}
              label='Password'
              type='password'
            />
          </FormSection>
          <FormSection>
            <Input
              value={repeatPassword}
              name='repeatPassword'
              onChange={this.saveToState}
              label='Repeat password'
              type='password'
              error={this.state.matchingPasswordError}
            />
          </FormSection>
          <AcceptInviteButton
            validate={this.validate}
            id={id}
            password={password}
          />
          <ClearFix />
          <Error />
          <ClearFix />
        </form>
      </Fragment>
    )
  }
}

export default InviteHolder
