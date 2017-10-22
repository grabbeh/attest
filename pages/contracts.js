import Page from '../components/Page'
import ContractsList from '../components/contracts/ContractsList'
import Header from '../components/contracts/Header'
import withData from '../lib/withData'

export default withData(props => (
  <Page>
    <Header />
    <ContractsList />
  </Page>
))
