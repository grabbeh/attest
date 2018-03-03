import Link from 'next/link'
import PageExample from '../landing-page/PageExample'
import { graphql, compose } from 'react-apollo'
import LOGIN_MUTATION from '../../queries/LoginMutation'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'
import { Component } from 'react'
import ClearFix from '../styles/ClearFix'

class LandingPage extends Component {
  logout = () => {
    redirect({}, '/')
    this.props.client.resetStore().then()
    document.cookie = cookie.serialize('token', '')
  }

  render () {
    return (
      <div className='bg-light-peach'>
        <div className='mh6'>
          <div className='pt4 f3'>
            <div className='fl b dark-gray'>
              attest
            </div>
            <div className='fr'>
              {this.props.user
                ? <div>
                  <span>{this.props.user.email}</span>
                  <span className='pl3 dark-gray' onClick={this.logout}>
                    <i title='Sign out' className='fa fa-sign-out' />
                  </span>
                </div>
                : <Link href='/login'>
                  <a className='dim link black'>Login</a>
                </Link>}
            </div>
          </div>
          <ClearFix />
          <div className='mt5'>
            <div className='f2 b dark-gray'>
              An open source platform for contract management
            </div>
            <div className='f3 mt4 dark-gray'>
              Easily get visibility on contract volume,  progress and status
            </div>
            <div className='f5 mt4'>
              <div className='grow fl br2 shadow-3 pv2 ph3 tc bg-blue mr4'>
                <Link href='/create-admin-account'>
                  <a className='link white'>CREATE ACCOUNT</a>
                </Link>
              </div>
              <div
                className='grow fl br2 shadow-3 pv2 ph3 tc pointer bg-navy white mr4'
                onClick={this.props.login}
              >
                VIEW DEMO
              </div>
              <div className='grow fl br2 shadow-3 pv2 ph3 tc bg-lightest-blue'>
                <Link href='https://github.com/grabbeh/attest'>
                  <a className='link dark-gray'>GITHUB</a>
                </Link>
              </div>

            </div>
            <ClearFix />
            <div className='center mt4 mb5'>
              <PageExample />
            </div>
          </div>
        </div>
        <div className='bg--dark-blue pa4'>
          <div className='white tc f4'>
            "Probably not the future of contract management"
          </div>
          <div className='white mt2 fr'>- nameless VC</div>
          <div className='cf' />
        </div>
      </div>
    )
  }
}

const loginMutation = graphql(LOGIN_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      login () {
        return mutate({
          variables: { email: 'demo@demo.co.uk', password: 'demo' },
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

const LandingPageWithLogin = compose(loginMutation)(LandingPage)

export default LandingPageWithLogin
