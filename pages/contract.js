import ContractContainer from '../components/contract/ContractContainer'
import { AuthPage } from '../components/Page'

const ContractPage = AuthPage(props => <ContractContainer {...props} />)

export default ContractPage
