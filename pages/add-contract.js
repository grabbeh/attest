import AddContract from '../components/add-contract/AddContract'
import { AuthPage } from '../components/Page'

const AddContractPage = AuthPage(props => <AddContract {...props} />)

export default AddContractPage
