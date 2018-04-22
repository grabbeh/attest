import { AuthPage } from '../components/Page'
import MainLandingPage from '../components/landing-page/LandingPage'

const LandingPageWithData = AuthPage(props => <MainLandingPage {...props} />)

export default LandingPageWithData
