// import Page from '../components/Page'
import ContractsData from '../components/contracts/ContractsData'
import { AuthPage } from '../components/Page'

const ContractsPage = AuthPage(props => <ContractsData {...props} />)

export default ContractsPage
