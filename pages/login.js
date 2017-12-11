import Page from '../components/Page'
import LoginForm from '../components/contracts/LoginForm'
import Header from '../components/contracts/Header'
import withData from '../lib/withData'

const LoginPage = withData(props => (
  <Page>
    <LoginForm client={props.client} />
  </Page>
))

export default LoginPage
