import Settings from './Settings'
import { graphql, compose } from 'react-apollo'
import Loading from '../general/Loading'
import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'

const SettingsData = props => {
  if (props.loading) return <Loading />
  else return <Settings {...props} />
}

const MasterEntityMetaDataQuery = graphql(MASTER_ENTITY_METADATA_QUERY, {
  props: ({ data: { loading, masterEntity } }) => ({
    loading,
    masterEntity
  })
})

const UpdateMasterEntityMutation = graphql(UPDATE_MASTER_ENTITY_MUTATION, {
  props ({ mutate }) {
    return {
      updateMasterEntity (masterEntity) {
        return mutate({
          variables: { masterEntity },
          update: (store, response) => {
            console.log(response)
            // redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const SettingsFormWithQueries = compose(
  MasterEntityMetaDataQuery,
  UpdateMasterEntityMutation
)(SettingsData)

export default SettingsFormWithQueries
