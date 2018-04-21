import InviteContainer from '../components/invite/InviteContainer'
import { UserRedirectPage } from '../components/Page'

const InvitePage = UserRedirectPage(props => <InviteContainer {...props} />)

export default InvitePage
