import CONTRACT_METADATA_QUERY from '../../queries/MasterEntityMetaDataQuery'
import { Query } from 'react-apollo'
import AddContractForm from './AddContract'
import Loading from '../general/Loading'
import WideCenterBox from '../styles/WideCenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'

const AddContractContainer = props => (
  <Query query={CONTRACT_METADATA_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return 'Error'
      return (
        <FadeRightDiv>
          <WideCenterBox>
            <AddContractForm {...data} title='Add Contract' {...props} />
          </WideCenterBox>
        </FadeRightDiv>
      )
    }}
  </Query>
)

export default AddContractContainer
