import LoginForm from '../components/login-form/LoginForm'
import { AuthPage } from '../components/Page'

const LoginPage = AuthPage(props => <LoginForm {...props} />)

export default LoginPage
