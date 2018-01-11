import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import CONTRACT_METADATA_QUERY from '../../queries/ContractMetaDataQuery'
import { graphql, compose } from 'react-apollo'
import react from 'react'
import Header from './Header'
import Input from './Input'
import cn from 'classnames'
import CheckBox from './CheckBox'
import redirect from '../../lib/Redirect'
import Radio from './Radio'
import FormSection from '../styles/FormSection'
import FormButton from '../styles/FormButton'
import FormTitle from '../styles/FormTitle'
import ClearFix from '../styles/ClearFix'
import Select from './Select'
import DatePicker from 'react-datepicker'
import Loading from './Loading'

class AddContractForm extends react.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: '',
      contract: {
        executionDate: null,
        effectiveDate: null,
        expiryDate: null,
        internalParties: ['ACME Inc'],
        externalParties: [],
        currentStatus: [],
        statuses: [],
        tags: [],
        businessUnit: '',
        currentStatus: '',
        assignedTo: { firstName: '', lastName: '', id: '' }
      }
    }
  }

  handleExecutionDate = date => {
    let contract = this.state.contract
    contract.executionDate = date
    this.setState({ contract })
  }

  handleEffectiveDate = date => {
    let contract = this.state.contract
    contract.effectiveDate = date
    this.setState({ contract })
  }

  handleExpiryDate = date => {
    let contract = this.state.contract
    contract.expiryDate = date
    this.setState({ contract })
  }

  handleClick = e => {
    e.preventDefault()
    this.props.addContract(this.state.contract)
  }

  saveToState = e => {
    let { contract } = this.state
    let { name, value, type } = e.target
    contract.externalParties = value
    this.setState({ contract })
  }

  deleteItem = (tag, index) => {
    let { contract } = this.state
    contract.tags = _.without(contract.tags, tag)
    this.setState({ contract })
  }

  handleStatusChange = e => {
    let { contract } = this.state
    let status = e.target.value
    let date = null
    if (status !== 'Executed') {
      contract.executionDate = null
      this.setState({ contract })
      date = new Date().getTime()
    } else {
      if (contract.executionDate) {
        date = contract.executionDate.valueOf()
      } else date = null
    }
    contract.statuses.push({ status, date })
    contract.currentStatus = status
    this.setState({ selectedStatus: status, contract })
  }

  handleLawyerChange = e => {
    let id = e.target.value
    let { contract } = this.state
    const { allLawyers } = this.props
    allLawyers.forEach(lawyer => {
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
    const { allBusinessUnits } = this.props
    allBusinessUnits.forEach(unit => {
      if (selectedUnit == unit.name) {
        contract.businessUnit = selectedUnit
        this.setState({
          contract: contract,
          selectedBusinessUnit: selectedUnit
        })
      }
    })
  }

  addTag = tag => {
    let { contract } = this.state
    contract.tags.push(tag)
    this.setState({ contract: contract })
  }

  updateSet = (set, label) => {
    if (set.has(label)) {
      set.delete(label)
    } else {
      set.add(label)
    }
    return [...set]
  }

  handleCheckboxChange = label => {
    let { contract } = this.state
    let { tags } = this.state.contract
    let tagSet = new Set(tags)
    let updated = this.updateSet(tagSet, label)
    contract.tags = updated
    this.setState({ contract: contract })
  }

  render () {
    let { loading, allLawyers, allStatuses, allBusinessUnits } = this.props
    let {
      contract,
      selectedStatus,
      selectedLawyer,
      selectedBusinessUnit
    } = this.state
    let { externalParties, executionDate, expiryDate, effectiveDate } = contract

    let businessUnitSelect = (
      <div className='mb2'>
        <select
          className='pa1'
          value={selectedBusinessUnit}
          key={selectedBusinessUnit}
          onChange={this.handleBusinessUnitChange}
        >
          {allBusinessUnits.map(unit => (
            <option key={unit.name} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>
    )

    let tagInputs = null
    let { allTags } = this.props
    tagInputs = (
      <div className='list flex flex-wrap'>
        {allTags.map(t => (
          <CheckBox
            key={t.name}
            handleCheckboxChange={this.handleCheckboxChange}
            checked={false}
            label={t.name}
            value={t.name}
          />
        ))}
      </div>
    )

    return (
      <div>
        <Header client={this.props.client} user={this.props.loggedUser} />
        {this.props.loading
          ? <Loading />
          : <div className='center pa3 mw6 bg-white mt4 ba b--black-20'>
            <form>
              <div className='b f4 bb bw1 b--black-20 w-100 pb2'>
                  Add contract
                </div>
              <FormSection>
                <Input
                  onChange={this.saveToState}
                  value={externalParties}
                  label='External party'
                  name='externalParty'
                  />
              </FormSection>
              <ClearFix />
              <FormTitle>Tags</FormTitle>
              <FormSection>
                {tagInputs}
              </FormSection>
              <ClearFix />
              <FormTitle>Status</FormTitle>
              <FormSection>
                <Radio
                  handleChange={this.handleStatusChange}
                  selectedItem={selectedStatus}
                  items={allStatuses}
                  />
              </FormSection>
              <ClearFix />
              <FormSection>
                <FormTitle>Execution date</FormTitle>
                <DatePicker
                  className='pa1 mv2 ba b--blue bw1'
                  selected={executionDate}
                  onChange={this.handleExecutionDate}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                  />
              </FormSection>
              <ClearFix />
              <FormSection>
                <FormTitle>Effective date</FormTitle>
                <DatePicker
                  className='pa1 mv2 ba b--blue bw1'
                  selected={effectiveDate}
                  onChange={this.handleEffectiveDate}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                  />
              </FormSection>
              <ClearFix />
              <FormSection>
                <FormTitle>Expiry date</FormTitle>
                <DatePicker
                  className='pa1 mv2 ba b--blue bw1'
                  selected={expiryDate}
                  onChange={this.handleExpiryDate}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='DD/MM/YYYY'
                  />
              </FormSection>
              <ClearFix />
              <FormTitle>Business Unit</FormTitle>
              <FormSection>
                {businessUnitSelect}
              </FormSection>
              <ClearFix />
              <FormTitle>Lawyer</FormTitle>
              <FormSection>
                <Select
                  selectedItem={selectedLawyer}
                  items={allLawyers}
                  handleChange={this.handleLawyerChange}
                  />
              </FormSection>
              <ClearFix />
              <FormButton onClick={this.handleClick} text='Submit' />
              <ClearFix />
            </form>
          </div>}
      </div>
    )
  }
}

const MetaDataQuery = graphql(CONTRACT_METADATA_QUERY, {
  props: ({
    data: {
      loading,
      loggedUser,
      allBusinessUnits,
      allTags,
      allLawyers,
      allStatuses
    }
  }) => ({
    loading,
    loggedUser,
    allBusinessUnits,
    allTags,
    allLawyers,
    allStatuses
  })
})

const AddContractMutation = graphql(ADD_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      addContract (contract) {
        return mutate({
          variables: { contract },
          update: (store, response) => {
            redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const AddContractFormWithQueries = compose(MetaDataQuery, AddContractMutation)(
  AddContractForm
)

export default AddContractFormWithQueries
