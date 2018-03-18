import react from 'react'
import Input from '../general/Input'
import cn from 'classnames'
import CheckBox from '../general/CheckBox'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormButton from '../styles/FormButton'
import FormTitle from '../styles/FormTitle'
import ClearFix from '../styles/ClearFix'
import Flex from '../styles/Flex'
import SideColumn from '../side-menu/SideColumn'
import CenterBox from '../styles/CenterBox'
import DeleteCheckbox from '../general/DeleteCheckbox'
import { GithubPicker } from 'react-color'
import _ from 'lodash'

class SettingsForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      businessUnits: props.masterEntity.businessUnits,
      businessUnitName: '',
      tags: props.masterEntity.tags,
      tagName: '',
      statuses: props.masterEntity.statuses,
      statusName: ''
    }
  }

  setStatusColor = (label, color, index) => {
    let { statuses } = this.state
    let revisedStatus = { ...statuses[index], color }
    let copy = [...statuses]
    copy.splice(index, 1, revisedStatus)
    this.setState({ statuses: copy })
  }

  setTagColor = (label, color, index) => {
    let { tags } = this.state
    let revisedTag = { ...tags[index], color }
    let copy = [...tags]
    copy.splice(index, 1, revisedTag)
    this.setState({ tags: copy })
  }

  setBusinessUnitColor = (label, color, index) => {
    let { businessUnits } = this.state
    let revisedUnit = { ...businessUnits[index], color }
    let copy = [...businessUnits]
    copy.splice(index, 1, revisedUnit)
    this.setState({ businessUnits: copy })
  }

  handleSubmit = e => {
    e.preventDefault()
    let { businessUnits, tags, statuses } = this.state
    let o = { businessUnits, tags, statuses }
    this.props.updateMasterEntity(o)
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  addBusinessUnit = e => {
    e.preventDefault()
    let { businessUnits, businessUnitName } = this.state
    let revised = [{ name: businessUnitName }, ...businessUnits]
    this.setState({ businessUnits: revised, businessUnitName: '' })
  }

  addTag = e => {
    e.preventDefault()
    let { tags, tagName } = this.state
    let revised = [{ name: tagName }, ...tags]
    this.setState({ tags: revised, tagName: '' })
  }

  addStatus = e => {
    e.preventDefault()
    let { statuses, state, statusName } = this.state
    let revised = [{ name: statusName }, ...statuses]
    this.setState({ statuses: revised, statusName: '' })
  }

  deleteBusinessUnit = (label, index) => {
    let revised = [...this.state.businessUnits]
    revised.splice(index, 1)
    this.setState({ businessUnits: revised })
  }

  deleteTag = (label, index) => {
    let revised = [...this.state.tags]
    revised.splice(index, 1)
    this.setState({ tags: revised })
  }

  deleteStatus = (label, index) => {
    let revised = [...this.state.statuses]
    revised.splice(index, 1)
    this.setState({ statuses: revised })
  }

  render () {
    let {
      businessUnitName,
      tagName,
      statusName,
      businessUnits,
      tags,
      statuses
    } = this.state

    return (
      <form className='mr3 f4'>
        <FormSection>
          <Input
            onChange={this.saveToState}
            value={businessUnitName}
            label='Business unit'
            name='businessUnitName'
            onClick={this.addBusinessUnit}
          />
        </FormSection>
        <ul className='mt1 list ma0 pa0'>
          {businessUnits &&
            businessUnits.map((b, i) => (
              <DeleteCheckbox
                checked
                handleCheckboxChange={this.deleteBusinessUnit}
                label={b.name}
                key={i}
                index={i}
                color={b.color}
                setColor={this.setBusinessUnitColor}
              />
            ))}
        </ul>
        <ClearFix />
        <FormSection>
          <Input
            onChange={this.saveToState}
            value={tagName}
            label='Tag'
            name='tagName'
            onClick={this.addTag}
          />
        </FormSection>
        <ul className='mt1 list ma0 pa0'>
          {tags &&
            tags.map((t, i) => (
              <DeleteCheckbox
                checked
                handleCheckboxChange={this.deleteTag}
                label={t.name}
                key={i}
                index={i}
                color={t.color}
                setColor={this.setTagColor}
              />
            ))}
        </ul>
        <ClearFix />
        <FormSection>
          <Input
            onChange={this.saveToState}
            value={statusName}
            label='Status'
            name='statusName'
            onClick={this.addStatus}
          />
        </FormSection>
        <ClearFix />
        <ul className='mt1 list ma0 pa0'>
          {statuses &&
            statuses.map((s, i) => (
              <DeleteCheckbox
                checked
                handleCheckboxChange={this.deleteStatus}
                label={s.name}
                key={i}
                index={i}
                color={s.color}
                setColor={this.setStatusColor}
              />
            ))}
        </ul>
        <ClearFix />
        <FormButton onClick={this.handleSubmit} text='SUBMIT' />
      </form>
    )
  }
}

export default SettingsForm
