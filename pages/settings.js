import Settings from '../components/settings/Settings'
import { AuthPage } from '../components/Page'

const SettingsPage = AuthPage(props => <Settings {...props} />)

export default SettingsPage
