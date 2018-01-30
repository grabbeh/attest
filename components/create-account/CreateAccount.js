import React from 'react'
import { graphql, compose } from 'react-apollo'
import withData from '../../lib/withData'
import CREATE_ACCOUNT_MUTATION from '../../queries/CreateAccountMutation'
import redirect from '../../lib/Redirect'
import FormButton from '../styles/FormButton'
import Input from '../general/Input'
import ClearFix from '../styles/ClearFix'
import FormTitle from '../styles/FormTitle'
import Box from '../styles/Box'

class CreateAccountForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      masterEntity: ''
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
    this.props.createAdminAccount(
      this.state.masterEntity,
      this.state.email,
      this.state.password
    )
  }

  render () {
    return (
      <Box>
        <FormTitle title='Create new account' />
        <form>
          <div className='mt2'>
            <Input
              value={this.state.masterEntity}
              name='masterEntity'
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

          <FormButton onClick={this.handleClick}>
            Submit
          </FormButton>
          <ClearFix />
        </form>
        <div />
      </Box>
    )
  }
}

const createAccountMutation = graphql(CREATE_ACCOUNT_MUTATION, {
  props ({ mutate }) {
    return {
      createAdminAccount (masterEntity, email, password) {
        return mutate({
          variables: { masterEntity, email, password },
          update: (store, response) => {
            console.log(response)
          }
        })
      }
    }
  }
})

const CreateAccountFormWithMutation = compose(createAccountMutation)(
  CreateAccountForm
)

export default CreateAccountFormWithMutation