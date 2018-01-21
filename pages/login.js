// import Page from '../components/Page'
import LoginForm from '../components/login-form/LoginForm'
import { Page } from '../components/Page'

const LoginPage = Page(props => <LoginForm client={props.client} />)

export default LoginPage
