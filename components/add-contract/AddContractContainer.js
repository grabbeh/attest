import { useQuery } from '@apollo/react-hooks'
import GET_CONTRACT_METADATA from '../../queries/MasterEntityMetaDataQuery'
import AddContractForm from './AddContract'
import Loading from '../general/Loading'
import WideCenterBox from '../styles/WideCenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'

const AddContractContainer = props => {
  const { loading, error, data } = useQuery(GET_CONTRACT_METADATA)
  if (loading) return <Loading />
  if (error) return 'Error'
  return (
    <FadeRightDiv>
      <WideCenterBox>
        <AddContractForm {...data} title='Add Contract' {...props} />
      </WideCenterBox>
    </FadeRightDiv>
  )
}

export default AddContractContainer
