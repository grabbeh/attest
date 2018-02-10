import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'
import { graphql, compose } from 'react-apollo'
import react from 'react'
import Input from '../general/Input'
import cn from 'classnames'
import CheckBox from '../general/CheckBox'
import redirect from '../../lib/Redirect'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormButton from '../styles/FormButton'
import FormTitle from '../styles/FormTitle'
import SectionTitle from '../styles/SectionTitle'
import ClearFix from '../styles/ClearFix'
import Loading from '../general/Loading'
import Flex from '../styles/Flex'
import SideColumn from '../side-menu/SideColumn'
import Box from '../styles/Box'
import DeleteCheckbox from '../general/DeleteCheckbox'
import { GithubPicker } from 'react-color'
import _ from 'lodash'

class SettingsForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      businessUnits: '',
      businessUnitName: '',
      tags: '',
      tagName: '',
      statuses: '',
      statusName: ''
    }
  }

  setStatusColor = (label, color, index) => {
    let { statuses } = this.state
    let status = statuses[index]
    let revisedStatus = { ...status }
    revisedStatus.color = color
    let revisedStatuses = [...statuses]
    revisedStatuses.splice(index, 1, revisedStatus)
    this.setState({ statuses: revisedStatuses })
  }

  setTagColor = (label, color, index) => {
    let { tags } = this.state
    let tag = tags[index]
    let revisedTag = { ...tag }
    revisedTag.color = color
    let revisedTags = [...tags]
    revisedTags.splice(index, 1, revisedTag)
    this.setState({ tags: revisedTags })
  }

  setBusinessUnitColor = (label, color, index) => {
    let { businessUnits } = this.state
    let unit = businessUnits[index]
    let revisedUnit = { ...unit }
    revisedUnit.color = color
    let revisedUnits = [...businessUnits]
    revisedUnits.splice(index, 1, revisedUnit)
    this.setState({ businessUnits: revisedUnits })
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

  addBusinessUnit = () => {
    let { businessUnits, businessUnitName } = this.state
    let newUnit = { name: businessUnitName }
    let revised = [newUnit, ...businessUnits]
    this.setState({
      businessUnits: revised,
      businessUnitName: ''
    })
  }

  addTag = () => {
    let { tags, tagName } = this.state
    let newTag = { name: tagName }
    let revised = [newTag, ...tags]
    this.setState({ tags: revised, tagName: '' })
  }

  addStatus = () => {
    let { statuses, state, statusName } = this.state
    let status = { name: statusName }
    let revised = [status, ...statuses]
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
    if (this.props.data.masterEntity) {
      let { businessUnitName, tagName, statusName } = this.state
      let { businessUnits, tags, statuses } = this.props.data.masterEntity
      return (
        <Box>
          <form>
            <FormTitle title='Filters' />
            <FormSection>
              <Input
                onChange={this.saveToState}
                value={businessUnitName}
                label='Business unit'
                name='businessUnitName'
                onClick={this.addBusinessUnit}
              />
              <ClearFix />
              <ul className='mt1 list ma0 pa0'>
                {businessUnits.map((b, i) => (
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
            </FormSection>
            <ClearFix />
            <FormSection>
              <Input
                onChange={this.saveToState}
                value={tagName}
                label='Tag'
                name='tagName'
                onClick={this.addTag}
              />
              <ClearFix />
              <ul className='mt1 list ma0 pa0'>
                {tags.map((t, i) => (
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
            </FormSection>
            <ClearFix />
            <FormSection>
              <Input
                onChange={this.saveToState}
                value={statusName}
                label='Status'
                name='statusName'
                onClick={this.addStatus}
              />
              <ClearFix />

              <ClearFix />
              <ul className='mt1 list ma0 pa0'>
                {statuses.map((s, i) => (
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
            </FormSection>
            <ClearFix />
            <FormButton onClick={this.handleSubmit} text='Submit' />
            <ClearFix />
          </form>
        </Box>
      )
    }
    return <Loading />
  }
}

const MasterEntityMetaDataQuery = graphql(MASTER_ENTITY_METADATA_QUERY, {
  props: ({ data }) => ({
    data
  })
})

const UpdateMasterEntityMutation = graphql(UPDATE_MASTER_ENTITY_MUTATION, {
  props ({ mutate }) {
    return {
      updateMasterEntity (masterEntity) {
        return mutate({
          variables: { masterEntity },
          update: (store, response) => {
            console.log(response)
            // redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const SettingsFormWithQueries = compose(
  MasterEntityMetaDataQuery,
  UpdateMasterEntityMutation
)(SettingsForm)

export default SettingsFormWithQueries
