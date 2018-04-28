import { Component, Fragment } from 'react'
import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'
import { Mutation } from 'react-apollo'
import FormButton from '../styles/FormButton'
import Notification from '../general/Notification'

class UpdateSettingsButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false, success: false })
  }

  render () {
    let { businessUnits, tags, statuses } = this.props
    return (
      <Mutation
        mutation={UPDATE_MASTER_ENTITY_MUTATION}
        update={(cache, { data: { updateMasterEntity } }) => {}}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'Settings updated' })
        }}
      >
        {(updateMasterEntity, { data }) => (
          <Fragment>
            <FormButton
              text='SUBMIT'
              onClick={e => {
                e.preventDefault()
                let masterEntity = { businessUnits, tags, statuses }
                updateMasterEntity({ variables: { masterEntity } })
              }}
            />
            <Notification
              close={this.closeNotification}
              error={this.state.error}
              success={this.state.success}
            />
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default UpdateSettingsButton
