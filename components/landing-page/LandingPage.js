import Link from 'next/link'
import PageExample from './PageExample'
import { graphql, compose } from 'react-apollo'
import LOGIN_MUTATION from '../../queries/LoginMutation'
import redirect from '../../lib/Redirect'
import cookie from 'cookie'
import { Component } from 'react'
import ClearFix from '../styles/ClearFix'

class LandingPage extends Component {
  logout = () => {
    this.props.client.resetStore()
    document.cookie = cookie.serialize('token', '')
    redirect({}, '/')
  }

  render () {
    return (
      <div className='bg-light-peach'>
        <div className='mh6-l mh3'>
          <ClearFix />
          <div className='mt5'>
            <div className='f2 b dark-gray'>
              An open source contract management platform
            </div>
            <div className='f3 mt4 dark-gray'>
              Easily get visibility on contract volume,  progress and status
            </div>
            <div className='f5 mt4'>
              <button className='pointer w-100 w-20-l grow fl br2 shadow-3 pv2 ph3 tc bg-blue mr4'>
                <Link href='/signup'>
                  <a className='link white'>CREATE ACCOUNT</a>
                </Link>
              </button>
              <button
                className='w-100 w-20-l mt2 mt0-l grow fl br2 shadow-3 pv2 ph3 tc pointer bg-navy white mr4'
                onClick={this.props.login}
              >
                VIEW DEMO
              </button>
              <button className='pointer w-100 w-20-l mt2 mt0-l grow fl br2 shadow-3 pv2 ph3 tc bg-lightest-blue'>
                <Link href='https://github.com/grabbeh/attest'>
                  <a className='link dark-gray'>GITHUB</a>
                </Link>
              </button>

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
