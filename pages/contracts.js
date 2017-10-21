import Page from '../components/Page'
import ContractsList from '../components/ContractsList'
import withData from '../lib/withData'

export default withData(props => (
  <Page>
    <ContractsList />
  </Page>
))
