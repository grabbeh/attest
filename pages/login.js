import LoginForm from '../components/login-form/LoginForm'
import { UserPage } from '../components/Page'

const LoginPage = UserPage(props => <LoginForm {...props} />)

export default LoginPage
