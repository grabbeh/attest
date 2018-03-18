import UPDATE_USER_MUTATION from '../../queries/UpdateUserMutation'
import ADD_USER_MUTATION from '../../queries/AddUserMutation'
import DELETE_USER_MUTATION from '../../queries/DeleteUserMutation'
import UserForm from './UserForm'
import { graphql, compose } from 'react-apollo'

const AddUserMutation = graphql(ADD_USER_MUTATION, {
  props ({ mutate }) {
    return {
      addUser (user) {
        return mutate({
          variables: { user },
          update: (store, response) => {}
        })
      }
    }
  }
})

const UpdateUserMutation = graphql(UPDATE_USER_MUTATION, {
  props ({ mutate }) {
    return {
      updateUser (user) {
        return mutate({
          variables: { user },
          update: (store, response) => {}
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
