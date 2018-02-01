import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import CONTRACT_METADATA_QUERY from '../../queries/ContractMetaDataQuery'
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
import Select from '../general/Select'
import DatePicker from 'react-datepicker'
import Loading from '../general/Loading'
import Flex from '../styles/Flex'
import SideColumn from '../side-menu/SideColumn'
import Box from '../styles/Box'

class AddContractForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: '',
      externalPartyError: '',
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
        assignedTo: { firstName: '', lastName: '' }
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
    if (!err) this.props.addContract(this.state.contract)
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
    const { lawyers } = this.props
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
    const { businessUnits } = this.props
    businessUnits.forEach(unit => {
      if (selectedUnit == unit.name) {
        contract.businessUnit = selectedUnit
        this.setState({
          contract: contract,
          selectedBusinessUnit: selectedUnit
        })
      }
    })
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
    let { currentTags } = this.state.contract
    let tagSet = new Set(currentTags)
    let updated = this.updateSet(tagSet, label)
    contract.tags = updated
    this.setState({ contract: contract })
  }

  render () {
    let { loading, businessUnits, lawyers, tags, statuses } = this.props

    let {
      contract,
      selectedStatus,
      selectedLawyer,
      selectedBusinessUnit
    } = this.state
    let { externalParties, executionDate, expiryDate, effectiveDate } = contract

    let businessUnitSelect = null
    if (businessUnits.length) {
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
    if (tags.length > 0) {
      tagInputs = (
        <div className='list flex flex-wrap'>
          {tags.map(t => (
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
    }

    return (
      <div>
        {this.props.loading
          ? <Loading />
          : <Flex>
            <div
              className={cn(
                  !this.state.activeMenu && 'w3',
                  this.state.activeMenu && 'w-10-ns'
                )}
              >
              <SideColumn
                active={this.state.activeMenu}
                toggleMenu={this.toggleMenu}
                />
            </div>
            <div
              className={cn(
                  !this.state.activeMenu && 'w-94',
                  this.state.activeMenu && 'w-90-ns'
                )}
              >

              <Box>
                <form>
                  <FormTitle title='Add contract' />
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
                    {statuses.length > 0
                        ? <Radio
                          handleChange={this.handleStatusChange}
                          selectedItem={selectedStatus}
                          items={statuses}
                          />
                        : <div>Add statuses here</div>}
                  </FormSection>
                  <ClearFix />
                  {this.state.contract.currentStatus == 'Executed'
                      ? <div>
                        <FormSection>
                          <SectionTitle text='Execution date' />
                          <DatePicker
                            className='pa1 mb2 ba b--blue bw1'
                            selected={executionDate}
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
                            selected={effectiveDate}
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
                            selected={expiryDate}
                            onChange={this.handleExpiryDate}
                            showMonthDropdown
                            showYearDropdown
                            dateFormat='DD/MM/YYYY'
                            />
                        </FormSection>
                        <ClearFix />
                      </div>
                      : <div />}

                  <FormSection>
                    <SectionTitle text='Business unit' />
                    {businessUnitSelect || <div>Add business units here</div>}
                  </FormSection>
                  <ClearFix />
                  <FormSection>
                    <SectionTitle text='Lawyer' />
                    {lawyers.length > 0
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
              </Box>
            </div>
          </Flex>}
      </div>
    )
  }
}

const MetaDataQuery = graphql(CONTRACT_METADATA_QUERY, {
  options: props => ({
    variables: { masterEntityID: props.user.masterEntityID }
  }),
  props: ({
    data: { loading, masterEntity: { businessUnits, statuses, tags, lawyers } }
  }) => ({
    loading,
    businessUnits,
    statuses,
    tags,
    lawyers
  })
})

const AddContractMutation = graphql(ADD_CONTRACT_MUTATION, {
  props ({ mutate }) {
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
