import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'
import { Mutation } from 'react-apollo'
import FormButton from '../styles/FormButton'

const UpdateSettingsButton = ({ businessUnits, tags, statuses }) => (
  <Mutation
    mutation={UPDATE_MASTER_ENTITY_MUTATION}
    update={(cache, { data: { updateMasterEntity } }) => {
      // redirect({}, '/login')
    }}
  >
    {(updateMasterEntity, { data }) => (
      <FormButton
        text='SUBMIT'
        onClick={e => {
          e.preventDefault()
          let masterEntity = { businessUnits, tags, statuses }
          updateMasterEntity({ variables: { masterEntity } })
        }}
      />
    )}
  </Mutation>
)

export default UpdateSettingsButton
