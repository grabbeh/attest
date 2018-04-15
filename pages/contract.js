import ContractContainer from '../components/contracts/ContractContainer'
import { AuthPage } from '../components/Page'

const ContractsPage = AuthPage(props => <ContractContainer {...props} />)

export default ContractsPage
