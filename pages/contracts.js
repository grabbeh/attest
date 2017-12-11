import Page from '../components/Page'
import ContractsData from '../components/contracts/ContractsData'
import withData from '../lib/withData'

const ContractsPage = withData(props => (
  <Page>
    <ContractsData client={props.client} />
  </Page>
))

export default ContractsPage
