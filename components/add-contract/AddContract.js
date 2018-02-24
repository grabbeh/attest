import react from 'react'
import Input from '../general/Input'
import cn from 'classnames'
import CheckBox from '../general/CheckBox'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormButton from '../styles/FormButton'
import FormTitle from '../styles/FormTitle'
import SectionTitle from '../styles/SectionTitle'
import ClearFix from '../styles/ClearFix'
import Select from '../general/Select'
import DatePicker from 'react-datepicker'
import Loading from '../general/Loading'
import Flex from '../styles/Flex'
import SideColumn from '../side-menu/SideColumn'
import Box from '../styles/Box'
import _ from 'lodash'
import moment from 'moment'

class AddContractForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: '',
      initialTags: [],
      externalPartyError: '',
      lawyers: props.masterEntity.lawyers,
      tags: props.masterEntity.tags,
      statuses: props.masterEntity.statuses,
      businessUnits: props.masterEntity.businessUnits,
      contract: {
        executionDate: null,
        effectiveDate: null,
        expiryDate: null,
        internalParties: [],
        externalParties: [],
        currentStatus: [],
        statuses: [],
        tags: [],
        businessUnit: '',
        currentStatus: '',
        assignedTo: { firstName: '', lastName: '' }
      }
    }
  }

  processTags = (allTags, currentTags) => {
    let result = allTags.map(tag => {
      let checked = false
      currentTags.map(a => {
        if (a.name === tag.name) {
          checked = true
        }
      })
      return {
        checked: checked,
        name: tag.name,
        color: tag.color
      }
    })
    return result
  }

  handleExecutionDate = executionDate => {
    let contract = { ...this.state.contract, executionDate }
    this.setState({ contract })
  }

  handleEffectiveDate = effectiveDate => {
    let contract = { ...this.state.contract, effectiveDate }
    this.setState({ contract })
  }

  handleExpiryDate = expiryDate => {
    let contract = { ...this.state.contract, expiryDate }
    this.setState({ contract })
  }

  validate = () => {
    let isError = false
    const errors = {
      externalPartyError: ''
    }
    if (this.state.contract.externalParties.length < 1) {
      isError = true
      errors.externalPartyError = 'Please provide an external party'
    }
    this.setState({
      ...this.state,
      ...errors
    })
    return isError
  }

  handleClick = e => {
    e.preventDefault()
    const err = this.validate()
    if (!err) {
      this.props.handleContract(this.state.contract, this.props.closeModal)
    }
  }

  saveToState = e => {
    let { contract } = this.state
    let { name, value, type } = e.target
    contract.externalParties = [value]
    this.setState({ contract })
  }

  deleteItem = (tag, index) => {
    let { contract } = this.state
    contract.tags = _.without(contract.tags, tag)
    this.setState({ contract })
  }

  handleStatusChange = e => {
    let { contract } = this.state
    let date = new Date().getTime()
    let newStatus = { ...e, date }
    contract.statuses.push(newStatus)
    contract.currentStatus = newStatus
    this.setState({ selectedStatus: e.name, contract })
  }

  handleLawyerChange = e => {
    let id = e.target.value
    let { contract } = this.state
    const { lawyers } = this.props.masterEntity
    lawyers.forEach(lawyer => {
      if (lawyer.id == id) {
        let newLawyer = lawyer
        contract.assignedTo = newLawyer
        this.setState({ contract, selectedLawyer: id })
      }
    })
  }

  handleBusinessUnitChange = e => {
    let selectedUnit = e.target.value
    let { contract } = this.state
    const { businessUnits } = this.props.masterEntity
    businessUnits.forEach(unit => {
      if (selectedUnit == unit.name) {
        contract.businessUnit = { name: selectedUnit }
        this.setState({
          contract: contract,
          selectedBusinessUnit: selectedUnit
        })
      }
    })
  }

  handleCheckboxChange = label => {
    let { tags } = this.props.masterEntity
    let selectedTags = this.state.contract.tags

    let relevantTag = _.find(tags, { name: label })
    if (_.find(selectedTags, { name: label })) {
      _.remove(selectedTags, { name: label })
    } else {
      selectedTags.push(relevantTag)
    }
    let { contract } = this.state
    contract.tags = selectedTags
    this.setState({ contract })
  }

  createDate (num) {
    if (num) return moment(num)
    else return null
  }

  componentWillMount () {
    if (this.props.contract) {
      let { contract } = this.props

      this.setState({
        contract,
        selectedStatus: contract.currentStatus.name,
        selectedBusinessUnit: contract.businessUnit.name,
        initialTags: contract.tags
      })
    }
  }

  render () {
    let {
      contract,
      selectedStatus,
      selectedLawyer,
      selectedBusinessUnit,
      initialTags,
      businessUnits,
      lawyers,
      tags,
      statuses
    } = this.state
    let { externalParties, executionDate, expiryDate, effectiveDate } = contract

    let businessUnitSelect = null
    if (businessUnits && businessUnits.length) {
      businessUnitSelect = (
        <div className='mb2'>
          <select
            className='pa1 font ba bw1 b--blue'
            value={selectedBusinessUnit}
            key={selectedBusinessUnit}
            onChange={this.handleBusinessUnitChange}
          >
            {businessUnits.map(unit => (
              <option key={unit.name} value={unit.name}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>
      )
    }

    let tagInputs = null
    if (tags) {
      tags = _.uniqBy(_.concat(tags, initialTags), 'name')
      let updatedTags = this.processTags(tags, contract.tags)
      tagInputs = updatedTags.map((t, i) => (
        <div key={i} className='list'>
          <CheckBox
            handleCheckboxChange={this.handleCheckboxChange}
            checked={t.checked}
            label={t.name}
            value={t.name}
            color={t.color}
          />
        </div>
      ))
    }

    return (
      <form>
        <FormTitle title={this.props.title} />
        <FormSection>
          <Input
            onChange={this.saveToState}
            value={externalParties}
            label='External party'
            name='externalParty'
            error={this.state.externalPartyError}
          />
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Tags' />
          {tagInputs || <div>Add tags here</div>}
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Status' />
          {statuses && statuses.length
            ? <Radio
              handleChange={this.handleStatusChange}
              selectedItem={selectedStatus}
              items={statuses}
              />
            : <div>Add statuses here</div>}
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Execution date' />
          <DatePicker
            className='pa1 mb2 ba b--blue bw1'
            selected={this.createDate(executionDate)}
            onChange={this.handleExecutionDate}
            showMonthDropdown
            showYearDropdown
            dateFormat='DD/MM/YYYY'
          />
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Effective date' />
          <DatePicker
            className='pa1 mb2 ba b--blue bw1'
            selected={this.createDate(effectiveDate)}
            onChange={this.handleEffectiveDate}
            showMonthDropdown
            showYearDropdown
            dateFormat='DD/MM/YYYY'
          />
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Expiry date' />
          <DatePicker
            className='pa1 mb2 ba b--blue bw1'
            selected={this.createDate(expiryDate)}
            onChange={this.handleExpiryDate}
            showMonthDropdown
            showYearDropdown
            dateFormat='DD/MM/YYYY'
          />
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Business unit' />
          {businessUnitSelect || <div>Add business units here</div>}
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Lawyer' />
          {lawyers && lawyers.length > 0
            ? <Select
              selectedItem={selectedLawyer}
              items={lawyers}
              handleChange={this.handleLawyerChange}
              />
            : <div>Add lawyers here</div>}
        </FormSection>
        <ClearFix />
        <FormButton onClick={this.handleClick} text='Submit' />
        <ClearFix />
      </form>
    )
  }
}

export default AddContractForm
