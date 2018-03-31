import ChartsContainer from '../components/charts/ChartsContainer'
import { AuthPage } from '../components/Page'
import '../node_modules/react-vis/dist/style.css'

const ChartsPage = AuthPage(props => <ChartsContainer {...props} />)

export default ChartsPage
