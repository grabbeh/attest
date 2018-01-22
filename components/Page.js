import withData from '../lib/withData'
import withAuth from '../lib/withAuth'
// import { compose, withApollo } from 'react-apollo'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'

const Page = compose(withData, withApollo)
const AuthPage = compose(withData, withAuth, withApollo)

export { Page, AuthPage }
