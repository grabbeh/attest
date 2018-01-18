// import Page from '../components/Page'
import ContractsData from '../components/contracts/ContractsData'
import withData from '../lib/withData'

const ContractsPage = withData(props => <ContractsData client={props.client} />)

export default ContractsPage
