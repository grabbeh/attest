// import Page from '../components/Page'
import LoginForm from '../components/contracts/LoginForm'

import withData from '../lib/withData'

const LoginPage = withData(props => <LoginForm client={props.client} />)

export default LoginPage
