import React from 'react'
import { graphql, compose } from 'react-apollo'
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

class CreateAccountForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      error: ''
    }
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  setError = error => {
    this.setState({ error })
  }

  handleClick = e => {
    e.preventDefault()
    const { name, email, password } = this.state
    this.props.createAdminAccount(name, email, password, this.setError)
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
            <FormButton onClick={this.handleClick} text='SUBMIT' />
            <ClearFix />
            <Error error={error} />
            <ClearFix />
          </form>
        </CenterBox>
      </FadeRightDiv>
    )
  }
}

const createAccountMutation = graphql(CREATE_ACCOUNT_MUTATION, {
  props: ({ mutate }) => ({
    createAdminAccount: (name, email, password, setError) => {
      mutate({
        variables: { name, email, password, setError }
      })
        .then(res => {
          redirect({}, '/login')
        })
        .catch(e => {
          let error = e.graphQLErrors[0].message
          setError(error)
        })
    }
  })
})

const CreateAccountFormWithMutation = compose(createAccountMutation)(
  CreateAccountForm
)

export default CreateAccountFormWithMutation
