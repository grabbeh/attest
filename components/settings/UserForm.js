import { Component } from 'react'
import FormTitle from '../styles/FormTitle'
import FormSection from '../styles/FormSection'
import Input from '../general/Input'
import FormButton from '../styles/FormButton'
import DeleteCheckbox from '../general/DeleteCheckbox'
import _ from 'lodash'
import ClearFix from '../styles/ClearFix'
import ContractHolder from '../contracts/ContractHolder'
import { CSSTransitionGroup } from 'react-transition-group'

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
          ? <FormButton onClick={this.updateUser} text='EDIT USER' />
          : <FormButton onClick={this.addUser} text='ADD USER' />}

        <ClearFix />
        <div className='mt3'>
          <CSSTransitionGroup
            className='flex flex-wrap list pa0 ma0'
            component='ul'
            transitionName='example'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={500}
            transitionAppear
          >
            {users &&
              users.map((b, i) => (
                <div className='mb3 w-50-ns w-25-l w-100'>
                  <ContractHolder>
                    <div key={i} index={i}>
                      <div>{b.email}</div>
                      <div>{b.name}</div>
                      <div
                        onClick={() => {
                          this.deleteUser(b.id)
                        }}
                      >
                        x
                      </div>
                      <div
                        onClick={() => {
                          this.editUser(b)
                        }}
                      >
                        Edit
                      </div>
                    </div>
                  </ContractHolder>
                </div>
              ))}
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default UserForm
