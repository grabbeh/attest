import Settings from './Settings'
import { graphql, compose } from 'react-apollo'
import Loading from '../general/Loading'
import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'
import FadeRightDiv from '../styles/FadeRightDiv'

const SettingsContainer = props => {
  if (props.loading) return <Loading />
  else return <FadeRightDiv><Settings {...props} /></FadeRightDiv>
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
)(SettingsContainer)

export default SettingsFormWithQueries
