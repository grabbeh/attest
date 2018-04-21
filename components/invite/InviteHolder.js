import { Component } from 'react'
import FadeRightDiv from '../styles/FadeRightDiv'
import CenterBox from '../styles/CenterBox'
import FormTitle from '../styles/FormTitle'
import FormSection from '../styles/FormSection'
import Input from '../general/Input'
import FormButton from '../styles/FormButton'
import ClearFix from '../styles/ClearFix'
import Box from '../styles/Box'
import Error from '../general/Error'
import { Mutation } from 'react-apollo'
import ACCEPT_INVITE_MUTATION from '../../queries/AcceptInviteMutation'
import redirect from '../../lib/Redirect'
import AcceptInviteButton from './AcceptInviteButton'

class InviteHolder extends Component {
  constructor (props) {
    super(props)
    console.log(props)
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
      <Box>
        <FadeRightDiv>
          <CenterBox>
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
          </CenterBox>
        </FadeRightDiv>
      </Box>
    )
  }
}

export default InviteHolder
