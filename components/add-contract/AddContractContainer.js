import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import CONTRACT_METADATA_QUERY from '../../queries/ContractMetaDataQuery'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import { graphql, compose } from 'react-apollo'
import AddContractForm from './AddContract'
import Loading from '../general/Loading'
import redirect from '../../lib/Redirect'
import WideCenterBox from '../styles/WideCenterBox'
import FadeRightDiv from '../styles/FadeRightDiv'

const AddContractContainer = props => {
  if (!props.loading) {
    return (
      <FadeRightDiv>
        <WideCenterBox>
          <AddContractForm title='Add Contract' {...props} />
        </WideCenterBox>
      </FadeRightDiv>
    )
  }
  return <Loading />
}

const MetaDataQuery = graphql(CONTRACT_METADATA_QUERY, {
  props: ({ data: { loading, masterEntity, allUsers } }) => ({
    loading,
    masterEntity,
    allUsers
  })
})

const AddContractMutation = graphql(ADD_CONTRACT_MUTATION, {
  props ({ mutate }) {
    return {
      handleContract (contract) {
        return mutate({
          variables: { contract },
          update: (store, response) => {
            let contract = response.data.addContract
            // try/catch block used to silence error
            try {
              let data = store.readQuery({ query: CONTRACTS_QUERY })
              data.contracts.push(contract)
              store.writeQuery({ query: CONTRACTS_QUERY, data })
            } catch (e) {
              // console.log(e)
            }
            redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const AddContractFormWithQueries = compose(MetaDataQuery, AddContractMutation)(
  AddContractContainer
)

export default AddContractFormWithQueries
