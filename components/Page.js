import withData from '../lib/withData'
import withUser from '../lib/withUser'
import withLayout from '../lib/withLayout'
import withAuthLayout from '../lib/withAuthLayout'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'

const Page = compose(withData, withApollo, withLayout)
const LandingPage = compose(withData, withUser, withApollo)
const AuthPage = compose(withData, withApollo, withAuthLayout)
const UserPage = compose(withData, withUser, withApollo, withLayout)
const BasicPage = compose(withData, withApollo)

export { Page, AuthPage, UserPage, LandingPage, BasicPage }
