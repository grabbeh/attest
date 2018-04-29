import { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import FormTitle from '../styles/FormTitle'
import FormSection from '../styles/FormSection'
import Input from '../general/Input'
import FormButton from '../styles/FormButton'
import DeleteCheckbox from '../general/DeleteCheckbox'
import _ from 'lodash'
import ClearFix from '../styles/ClearFix'
import UserHolder from './UserHolder'
import { TransitionGroup } from 'react-transition-group'
import LawyerName from '../contracts/Lawyer'
import Fade from '../styles/FadeTransition'
import Title from '../styles/Title'
import ADD_USER_MUTATION from '../../queries/AddUserMutation'
import UPDATE_USER_MUTATION from '../../queries/UpdateUserMutation'
import DELETE_USER_MUTATION from '../../queries/DeleteUserMutation'
import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import Notification from '../general/Notification'

class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: '',
        email: ''
      },
      editUser: false,
      users: props.allUsers
    }
  }

  saveName = e => {
    let { user } = this.state
    user.name = e.target.value
    this.setState({ user })
  }

  saveEmail = e => {
    let { user } = this.state
    user.email = e.target.value
    this.setState({ user })
  }

  editUser = user => {
    let copy = _.cloneDeep(user)
    this.setState({ user: copy, editUser: true })
  }

  cancelEdit = () => {
    this.setState({ user: { email: '', name: '' }, editUser: false })
  }

  render () {
    let { updateUser } = this.props
    let { user, users, editUser } = this.state
    let { email, name, acceptedInvite } = user
    return (
      <div>
        <div className='pv2 f4'>{`${users.length} users`}</div>
        <div className='flex flex-wrap list pa0 ma0'>
          {users &&
            users.map((b, i) => (
              <Fade key={i}>
                <div className='mb3 w-50-ns w-50-l w-100'>
                  <UserHolder>
                    <div key={i} index={i}>
                      <i className='mr2 fa fa-envelope' />
                      {b.email}
                      <LawyerName name={b.name} />
                      <ul className='fr list pa0 mt2'>
                        <li className='fl mr2'>
                          <button
                            className='f6 link bg-white dim ph0 dib'
                            onClick={() => {
                              this.editUser(b)
                            }}
                          >
                            <i className='bg-white dark-gray pointer fa fa-pencil fa-lg' />
                          </button>

                        </li>
                        <DeleteUserButton id={b.id} />
                      </ul>
                      <ClearFix />
                      {b.acceptedInvite
                        ? 'Accepted user!'
                        : <div
                          >{`Invite link: https://tryattest.com/invite?id=${b.id}`}</div>}
                    </div>
                  </UserHolder>
                </div>
              </Fade>
            ))}
        </div>
        <ClearFix />
        {editUser
          ? <FormTitle title='Edit user' />
          : <FormTitle title='Add user' />}
        <FormSection>
          <Input
            value={name}
            name={name}
            onChange={this.saveName}
            label='Name'
          />
        </FormSection>
        <FormSection>
          <Input
            value={email}
            name={email}
            onChange={this.saveEmail}
            label='Email'
          />
        </FormSection>
        {editUser
          ? <div>
            <EditUserButton {...this.state} />
            <div className='pt2' onClick={this.cancelEdit}>Cancel</div>
          </div>
          : <AddUserButton {...this.state} />}

      </div>
    )
  }
}

class AddUserButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false, success: false })
  }

  render () {
    let { user } = this.props
    return (
      <Mutation
        mutation={ADD_USER_MUTATION}
        update={(store, response) => {
          let user = response.data.addUser
          let data = store.readQuery({ query: MASTER_ENTITY_METADATA_QUERY })
          data.allUsers.push(user)
          store.writeQuery({ query: MASTER_ENTITY_METADATA_QUERY, data })
        }}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'User added' })
        }}
      >
        {(addUser, { data }) => (
          <Fragment>
            <FormButton
              text='SUBMIT'
              onClick={e => {
                e.preventDefault()
                addUser({ variables: { user } })
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

class EditUserButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false, success: false })
  }

  render () {
    let { user } = this.props
    let { id } = user
    return (
      <Mutation
        mutation={UPDATE_USER_MUTATION}
        update={(store, response) => {
          let user = response.data.updateUser
          let data = store.readQuery({ query: MASTER_ENTITY_METADATA_QUERY })
          _.extend(_.find(data.allUsers, { id }), user)
          store.writeQuery({ query: MASTER_ENTITY_METADATA_QUERY, data })
        }}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'User updated' })
        }}
      >
        {(updateUser, { data }) => (
          <Fragment>
            <FormButton
              text='SUBMIT'
              onClick={e => {
                e.preventDefault()
                updateUser({ variables: { user } })
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

class DeleteUserButton extends Component {
  state = {
    error: null,
    success: null
  }

  closeNotification = () => {
    this.setState({ error: false, success: false })
  }

  render () {
    let { id } = this.props
    return (
      <Mutation
        mutation={DELETE_USER_MUTATION}
        update={(store, response) => {
          let data = store.readQuery({ query: MASTER_ENTITY_METADATA_QUERY })
          _.remove(data.allUsers, n => {
            return n.id == id
          })
          store.writeQuery({ query: MASTER_ENTITY_METADATA_QUERY, data })
        }}
        onError={error => {
          this.setState({ error })
        }}
        onCompleted={data => {
          this.setState({ success: 'User deleted' })
        }}
      >
        {(deleteUser, { data }) => (
          <Fragment>
            <li
              onClick={e => {
                e.preventDefault()
                deleteUser({ variables: { id } })
              }}
              className='fl mr2 '
            >
              <i className='pointer fa fa-trash-o fa-lg' />
            </li>
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

export default UserForm
