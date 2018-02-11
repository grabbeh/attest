import AddContractContainer
  from '../components/add-contract/AddContractContainer'
import { AuthPage } from '../components/Page'

const AddContractPage = AuthPage(props => <AddContractContainer {...props} />)

export default AddContractPage
