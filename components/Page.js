import withData from '../lib/withData'
import withLayout from '../lib/withLayout'
import withAuthLayout from '../lib/withAuthLayout'
import withLandingPage from '../lib/withLandingPage'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'

const Page = compose(withData, withApollo, withLayout)
const LandingPage = compose(withData, withApollo, withLandingPage)
const AuthPage = compose(withData, withApollo, withAuthLayout)
const BasicPage = compose(withData, withApollo)

export { Page, AuthPage, LandingPage, BasicPage }
