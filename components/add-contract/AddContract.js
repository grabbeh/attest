import react from 'react'
import Input from '../general/Input'
import CheckBox from '../general/CheckBox'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormTitle from '../styles/FormTitle'
import SectionTitle from '../styles/SectionTitle'
import ClearFix from '../styles/ClearFix'
import Select from '../general/Select'
import DatePicker from 'react-datepicker'
import _ from 'lodash'
import moment from 'moment'
import SubmitContractButton from './SubmitContractButton'

class AddContractForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: -1,
      initialTags: [],
      externalPartyError: '',
      lawyers: props.allUsers,
      tags: props.masterEntity.tags,
      statuses: props.masterEntity.statuses,
      businessUnits: props.masterEntity.businessUnits,
      contract: {
        executionDate: null,
        effectiveDate: null,
        expiryDate: null,
        internalParties: [],
        externalParties: [],
        currentStatus: {},
        statuses: [],
        tags: [],
        businessUnit: '',
        currentStatus: '',
        assignedTo: { name: '', email: '', id: '' }
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

  saveToState = e => {
    let { contract } = this.state
    let { name, value, type } = e.target
    contract.externalParties = [value]
    this.setState({ contract })
  }

  deleteItem = (tag, index) => {
    let contract = _.cloneDeep(this.state.contract)
    contract.tags = _.without(contract.tags, tag)
    this.setState({ contract })
  }

  handleStatusChange = e => {
    let contract = _.cloneDeep(this.state.contract)
    let date = new Date().getTime()
    let newStatus = { ...e, date }
    contract.statuses.push(newStatus)
    contract.currentStatus = newStatus
    this.setState({ selectedStatus: e.name, contract })
  }

  handleLawyerChange = e => {
    let email = e.target.value
    let contract = _.cloneDeep(this.state.contract)
    const lawyers = this.props.allUsers
    lawyers.forEach(lawyer => {
      if (lawyer.email == email) {
        contract.assignedTo = lawyer
        this.setState({ contract, selectedLawyer: email })
      }
    })
  }

  handleBusinessUnitChange = e => {
    let selectedUnit = e.target.value
    let contract = _.cloneDeep(this.state.contract)
    const { businessUnits } = this.props.masterEntity
    businessUnits.forEach(unit => {
      if (selectedUnit == unit.name) {
        contract.businessUnit = unit
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
        selectedLawyer: contract.assignedTo.email,
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
            className='f4 pa1 font pa2 mb2 bb bw1 b--black-20'
            value={selectedBusinessUnit}
            key={selectedBusinessUnit}
            onChange={this.handleBusinessUnitChange}
          >
            <option>Please select</option>
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
        {this.props.closeModal &&
          <span onClick={this.props.closeModal} className='fr'>
            <i className='fa fa-times fa-lg' />
          </span>}
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
          <div className='mt2'>
            {tagInputs.length > 0
              ? tagInputs
              : <div className='mt2'>Add tags here</div>}
          </div>
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Status' />
          <div className='mt2'>
            {statuses && statuses.length
              ? <Radio
                handleChange={this.handleStatusChange}
                selectedItem={selectedStatus}
                items={statuses}
                />
              : <div>Add statuses here</div>}
          </div>
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Execution date' />
          <DatePicker
            className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
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
            className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
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
            className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
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
          {businessUnitSelect ||
            <div className='mt1'>Add business units here</div>}
        </FormSection>
        <ClearFix />
        <FormSection>
          <SectionTitle text='Lawyer' />
          {lawyers && lawyers.length > 0
            ? <Select
              selectedItem={selectedLawyer}
              items={lawyers}
              handleChange={this.handleLawyerChange}
              placeholder='Please select'
              />
            : <div className='mt3 f4'>Add lawyers here</div>}
        </FormSection>
        <ClearFix />
        <SubmitContractButton
          validate={this.validate}
          closeModal={this.props.closeModal}
          contract={this.state.contract}
          text='SUBMIT'
        />
        <ClearFix />
      </form>
    )
  }
}

export default AddContractForm
