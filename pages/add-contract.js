// import Page from '../components/Page'
import AddContract from '../components/contracts/AddContract'
import withData from '../lib/withData'

const AddContractPage = withData(props => <AddContract client={props.client} />)

export default AddContractPage
