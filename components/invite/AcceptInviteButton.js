import { Mutation } from 'react-apollo'
import ACCEPT_INVITE_MUTATION from '../../queries/AcceptInviteMutation'
import redirect from '../../lib/Redirect'
import FormButton from '../styles/FormButton'

const AcceptInviteButton = ({ id, password, validate }) => (
  <Mutation
    mutation={ACCEPT_INVITE_MUTATION}
    update={(cache, { data: { acceptInvite } }) => {
      console.log(acceptInvite)
      redirect({}, '/login')
    }}
  >
    {(acceptInvite, { data }) => (
      <FormButton
        text='SUBMIT'
        onClick={e => {
          let user = { password, id }
          e.preventDefault()
          const err = validate()
          if (!err) acceptInvite({ variables: { user } })
        }}
      />
    )}
  </Mutation>
)

export default AcceptInviteButton
