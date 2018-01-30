import CreateAccountForm from '../components/create-account/CreateAccount'
import { UserPage } from '../components/Page'

const CreateAdminAccountPage = UserPage(props => (
  <CreateAccountForm {...props} />
))

export default CreateAdminAccountPage
