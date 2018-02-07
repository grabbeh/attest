import withData from '../lib/withData'
import withAuth from '../lib/withAuth'
import withUser from '../lib/withUser'
import withLayout from '../lib/withLayout'
import withAuthLayout from '../lib/withAuthLayout'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'

const Page = compose(withData, withApollo, withLayout)
const AuthPage = compose(withData, withAuth, withApollo, withAuthLayout)
const UserPage = compose(withData, withUser, withApollo, withLayout)

export { Page, AuthPage, UserPage }
