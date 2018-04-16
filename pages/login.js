import LoginForm from '../components/login-form/LoginForm'
import { UserRedirectPage } from '../components/Page'

const LoginPage = UserRedirectPage(props => <LoginForm {...props} />)

export default LoginPage
