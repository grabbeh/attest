import UPDATE_USER_MUTATION from '../../queries/UpdateUserMutation'
import ADD_USER_MUTATION from '../../queries/AddUserMutation'
import DELETE_USER_MUTATION from '../../queries/DeleteUserMutation'
import UserForm from './UserForm'
import { graphql, compose } from 'react-apollo'
import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import _ from 'lodash'

const AddUserMutation = graphql(ADD_USER_MUTATION, {
  props ({ mutate }) {
    return {
      addUser (user) {
        return mutate({
          variables: { user },
          update: (store, response) => {
            let user = response.data.addUser
            let data = store.readQuery({ query: MASTER_ENTITY_METADATA_QUERY })
            data.allUsers.push(user)
            store.writeQuery({ query: MASTER_ENTITY_METADATA_QUERY, data })
          }
        })
      }
    }
  }
})

const UpdateUserMutation = graphql(UPDATE_USER_MUTATION, {
  props ({ mutate }) {
    return {
      updateUser (user) {
        let id = user.id
        return mutate({
          variables: { user },
          update: (store, response) => {
            let user = response.data.updateUser
            let data = store.readQuery({ query: MASTER_ENTITY_METADATA_QUERY })
            _.extend(_.find(data.allUsers, { id }), user)
            store.writeQuery({ query: MASTER_ENTITY_METADATA_QUERY, data })
          }
        })
      }
    }
  }
})

const DeleteUserMutation = graphql(DELETE_USER_MUTATION, {
  props ({ mutate }) {
    return {
      deleteUser (id) {
        return mutate({
          variables: { id },
          update: (store, response) => {}
        })
      }
    }
  }
})

const UserFormWithMutations = compose(
  AddUserMutation,
  UpdateUserMutation,
  DeleteUserMutation
)(UserForm)

export default UserFormWithMutations
