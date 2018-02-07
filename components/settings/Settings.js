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

class SettingsForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      businessUnits: props.masterEntity.businessUnits,
      businessUnit: '',
      tags: props.masterEntity.tags,
      tag: '',
      statuses: props.masterEntity.statuses,
      statusName: '',
      statusColor: ''
    }
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
    let { businessUnits, businessUnit } = this.state
    let newUnit = { name: businessUnit }
    let revised = [newUnit, ...businessUnits]
    this.setState({ businessUnits: revised, businessUnit: '' })
  }

  addTag = e => {
    let { tags, tag } = this.state
    let newTag = { name: tag }
    let revised = [newTag, ...tags]
    this.setState({ tags: revised, tag: '' })
  }

  addStatus = e => {
    let { statuses, state, statusName, statusColor } = this.state
    let status = { name: statusName, color: statusColor }
    let revised = [status, ...statuses]
    this.setState({ statuses: revised, statusName: '', statusColor: '' })
  }

  deleteBusinessUnit = e => {
    let { businessUnits } = this.state
    let revisedBusinessUnits = [...businessUnits]
    var index = businessUnits.indexOf(e)

    if (index > -1) {
      revisedBusinessUnits.splice(index, 1)
    }
    this.setState({ businessUnits: revisedBusinessUnits })
  }

  deleteTag = e => {
    let { tags } = this.state
    var index = tags.indexOf(e)
    let revisedTags = [...tags]
    if (index > -1) {
      revisedTags.splice(index, 1)
    }
    this.setState({ tags: revisedTags })
  }

  deleteStatus = e => {
    let { statuses } = this.state

    let names = statuses.map(s => {
      return s.name
    })

    let index = names.indexOf(e)
    let revisedStatuses = [...statuses]
    if (index > -1) {
      revisedStatuses.splice(index, 1)
    }
    this.setState({ statuses: revisedStatuses })
  }

  render () {
    let {
      businessUnit,
      businessUnits,
      tag,
      tags,
      statusName,
      statusColor,
      statuses
    } = this.state
    return (
      <div>
        {this.props.loading
          ? <Loading />
          : <Box>
            <form>
              <FormTitle title='Filters' />
              <FormSection>
                <Input
                  onChange={this.saveToState}
                  value={businessUnit}
                  label='Business unit'
                  name='businessUnit'
                  onClick={this.addBusinessUnit}
                  />
                <ClearFix />
                <ul className='mt1 list ma0 pa0'>
                  {businessUnits.map(b => (
                    <DeleteCheckbox
                      checked
                      handleCheckboxChange={this.deleteBusinessUnit}
                      label={b.name}
                      key={b.name}
                      />
                    ))}
                </ul>
              </FormSection>
              <ClearFix />
              <FormSection>
                <Input
                  onChange={this.saveToState}
                  value={tag}
                  label='Tag'
                  name='tag'
                  onClick={this.addTag}
                  />
                <ClearFix />
                <ul className='mt1 list ma0 pa0'>
                  {tags.map((t, i) => (
                    <DeleteCheckbox
                      checked
                      handleCheckboxChange={this.deleteTag}
                      label={t.name}
                      key={t.name}
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
                  />
                <ClearFix />
                <Input
                  onChange={this.saveToState}
                  value={statusColor}
                  label='Color'
                  name='statusColor'
                  onClick={this.addStatus}
                  />
                <ClearFix />
                <ul className='mt1 list ma0 pa0'>
                  {statuses.map(s => (
                    <DeleteCheckbox
                      checked
                      handleCheckboxChange={this.deleteStatus}
                      label={s.name}
                      key={s.name}
                      color={s.color}
                      />
                    ))}
                </ul>
              </FormSection>
              <ClearFix />
              <FormButton onClick={this.handleSubmit} text='Submit' />
              <ClearFix />
            </form>
          </Box>}
      </div>
    )
  }
}

const MasterEntityMetaDataQuery = graphql(MASTER_ENTITY_METADATA_QUERY, {
  props: ({ data: { loading, masterEntity } }) => ({
    loading,
    masterEntity
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
