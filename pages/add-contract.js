import Page from '../components/Page'
import AddContract from '../components/contracts/AddContract'
import withData from '../lib/withData'

const AddContractPage = withData(props => (
  <Page>
    <AddContract client={props.client} />
  </Page>
))

export default AddContractPage
