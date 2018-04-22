import InviteContainer from '../components/invite/InviteContainer'
import { AuthPage } from '../components/Page'

const InvitePage = AuthPage(props => <InviteContainer {...props} />)

export default InvitePage
