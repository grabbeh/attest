import React from 'react'
import { graphql } from 'react-apollo'
import withData from '../../lib/withData'
import LOGIN_MUTATION from '../../queries/LoginMutation'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import redirect from '../../lib/Redirect'
import checkLoggedIn from '../../lib/checkLoggedIn'
import Link from 'next/link'
import cookie from 'cookie'

class LoginForm extends React.Component {
  static async getInitialProps (context) {
    /* const { loggedInUser } = await checkLoggedIn(context, this.props.client)
    if (loggedInUser.user) {
      redirect(context, '/')
    }
    return {} */
  }

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
      <div className='mt3 center mw6'>
        <div className='pa3 ma0 bg-haus'>
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
            <div className='mt3' />
          </form>
          <div>
            <button onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </div>
        <div>
          <Link href='/contracts'><a>Contracts</a></Link>
        </div>

      </div>
    )
  }
}

export default graphql(LOGIN_MUTATION, {
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
})(LoginForm)
