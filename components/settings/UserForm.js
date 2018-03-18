import { Component } from 'react'
import FormTitle from '../styles/FormTitle'
import FormSection from '../styles/FormSection'
import Input from '../general/Input'
import FormButton from '../styles/FormButton'
import DeleteCheckbox from '../general/DeleteCheckbox'
import _ from 'lodash'
import ClearFix from '../styles/ClearFix'

class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: '',
        email: ''
      },
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
    console.log(id)
    let { users } = this.state
    let copy = _.cloneDeep(users)
    this.props.deleteUser(id)
    _.remove(copy, n => {
      return n.id == id
    })
    this.setState({ users: copy })
  }

  render () {
    let { updateUser } = this.props
    let { user, users } = this.state
    let { email, name } = user
    console.log(users)
    return (
      <div>
        <div className='fl'>
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
              onClick={this.addUser}
            />
          </FormSection>
        </div>

        <ClearFix />
        <div>
          <ul className='f4 mt1 list ma0 pa0'>
            {users &&
              users.map((b, i) => (
                <DeleteCheckbox
                  checked
                  handleCheckboxChange={() => this.deleteUser(b.id)}
                  label={b.email}
                  key={i}
                  index={i}
                  color={b.color}
                  setColor={this.setLawyerColor}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserForm
