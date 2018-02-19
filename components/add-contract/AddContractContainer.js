import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import CONTRACT_METADATA_QUERY from '../../queries/ContractMetaDataQuery'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import { graphql, compose } from 'react-apollo'
import AddContractForm from './AddContract'
import Loading from '../general/Loading'
import redirect from '../../lib/Redirect'
import CenterBox from '../styles/CenterBox'

const AddContractContainer = props => {
  if (!props.loading) {
    return (
      <CenterBox><AddContractForm title='Add Contract' {...props} /></CenterBox>
    )
  }
  return <Loading />
}

const MetaDataQuery = graphql(CONTRACT_METADATA_QUERY, {
  props: ({ data: { loading, masterEntity } }) => ({
    loading,
    masterEntity
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
            let data = store.readQuery({ query: CONTRACTS_QUERY })
            data.contracts.push(contract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
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
