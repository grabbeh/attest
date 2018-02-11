import SettingsContainer from '../components/settings/SettingsContainer'
import { AuthPage } from '../components/Page'

const SettingsPage = AuthPage(props => <SettingsContainer {...props} />)

export default SettingsPage
