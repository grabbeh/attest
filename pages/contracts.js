import ContractsContainer from '../components/contracts/ContractsContainer'
import { AuthPage } from '../components/Page'

const ContractsPage = AuthPage(props => <ContractsContainer {...props} />)

export default ContractsPage
