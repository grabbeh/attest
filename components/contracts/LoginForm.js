import React from 'react'
import { graphql, compose } from 'react-apollo'
import withData from '../../lib/withData'
import LOGIN_MUTATION from '../../queries/LoginMutation'
import USER_QUERY from '../../queries/LoggedUserQuery.js'
import redirect from '../../lib/Redirect'
import Link from 'next/link'
import cookie from 'cookie'
import Header from './Header'
import FormButton from '../styles/FormButton'
import Input from './Input'
import ClearFix from '../styles/ClearFix'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount () {
    if (this.props.loggedUser) {
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
      <div>
        <Header user={this.props.loggedUser} />

        <div className='mt3 center mw6'>
          <div className='pa3 ma0 bg-white'>
            <div className='b pb2 bb bw1'>Login</div>
            <form>
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
          </div>
        </div>
      </div>
    )
  }
}

const userQuery = graphql(USER_QUERY, {
  props: ({ data: { loading, loggedUser } }) => ({
    loading,
    loggedUser
  })
})

const loginMutation = graphql(LOGIN_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      login (email, password) {
        return mutate({
          variables: { email, password },
          update: (store, response) => {
            document.cookie = cookie.serialize('token', response.data.login, {
              maxAge: 30 * 24 * 60 * 60 // 30 days
            })
            ownProps.client.resetStore().then(() => {
              redirect({}, '/contracts')
            })
          }
        })
      }
    }
  }
})

const LoginFormWithQueries = compose(userQuery, loginMutation)(LoginForm)

export default LoginFormWithQueries
