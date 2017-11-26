import Page from '../components/Page'
import ContractsData from '../components/contracts/ContractsData'
import Header from '../components/contracts/Header'
import withData from '../lib/withData'

const ContractsPage = withData(props => (
  <Page>
    <Header />
    <ContractsData />
  </Page>
))

export default ContractsPage
