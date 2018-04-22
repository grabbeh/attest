import SignupForm from '../components/signup/SignupForm'
import { AuthPage } from '../components/Page'

const SignupPage = AuthPage(props => <SignupForm {...props} />)

export default SignupPage
