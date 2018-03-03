import { LandingPage } from '../components/Page'
import MainLandingPage from '../components/landing-page/LandingPage'

const LandingPageWithData = LandingPage(props => <MainLandingPage {...props} />)

export default LandingPageWithData
