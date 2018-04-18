import { Component } from 'react'
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

  addUser = () => {
    let { users, user } = this.state
    users = [...users, this.state.user]
    this.setState({ users })
    this.props.addUser(user)
    this.setState({ user: { email: '', name: '' } })
  }

  deleteUser = id => {
    let copy = _.cloneDeep(this.state.users)
    this.props.deleteUser(id)
    _.remove(copy, n => {
      return n.id == id
    })
    this.setState({ users: copy })
  }

  editUser = user => {
    let copy = _.cloneDeep(user)
    this.setState({ user: copy, editUser: true })
  }

  cancelEdit = () => {
    this.setState({ user: { email: '', name: '' }, editUser: false })
  }

  updateUser = () => {
    this.props.updateUser(this.state.user)
    this.setState({ user: { email: '', name: '' } })
  }

  render () {
    let { updateUser } = this.props
    let { user, users, editUser } = this.state
    let { email, name } = user
    return (
      <div>
        <div className='pv2 f4 b'>{`${users.length} users`}</div>
        <TransitionGroup className='flex flex-wrap list pa0 ma0'>
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
                        <li
                          onClick={() => {
                            this.deleteUser(b.id)
                          }}
                          className='fl mr2 '
                        >
                          <i className='pointer fa fa-trash-o fa-lg' />
                        </li>
                      </ul>
                    </div>
                  </UserHolder>
                </div>
              </Fade>
            ))}
        </TransitionGroup>
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
            <FormButton onClick={this.updateUser} text='EDIT USER' />
            <div className='pt2' onClick={this.cancelEdit}>Cancel</div>
          </div>
          : <FormButton onClick={this.addUser} text='ADD USER' />}

      </div>
    )
  }
}

export default UserForm
