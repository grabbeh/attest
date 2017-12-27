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
import FormInput from '../styles/FormInput'
import FormTitle from '../styles/FormTitle'
import ClearFix from '../styles/ClearFix'
import Select from './Select'

class AddContractForm extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: '',
      contract: {
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
    let date = new Date().getTime()
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
    let { allLawyers, allStatuses, allBusinessUnits } = this.props
    let {
      contract,
      selectedStatus,
      selectedLawyer,
      selectedBusinessUnit
    } = this.state
    let businessUnitSelect = (
      <div className='mb2'>
        <select
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
    tagInputs = allTags.map(t => (
      <CheckBox
        key={t.name}
        handleCheckboxChange={this.handleCheckboxChange}
        checked={false}
        label={t.name}
        value={t.name}
      />
    ))
    let { externalParties } = this.state.contract
    return (
      <div>
        <Header client={this.props.client} user={this.props.loggedUser} />
        <div className='center pa3 mw6 bg-haus mt3'>
          <form>
            <div className='b f4 bb bw1 w-100 pb2'>Add contract</div>
            <Input
              onChange={this.saveToState}
              value={externalParties}
              placeholder='External party'
              label='External party'
              name='externalParty'
            />
            <ClearFix />
            <FormTitle>Tags</FormTitle>
            <div className='pv2 fl list flex flex-wrap w-100 bb bw1'>
              {tagInputs}
            </div>
            <ClearFix />
            <FormTitle>Status</FormTitle>
            <FormInput>
              <Radio
                handleChange={this.handleStatusChange}
                selectedItem={selectedStatus}
                items={allStatuses}
              />
            </FormInput>
            <ClearFix />
            <FormTitle>Business Units</FormTitle>
            <FormInput>
              {businessUnitSelect}
            </FormInput>
            <ClearFix />
            <FormTitle>Lawyer</FormTitle>
            <FormInput>
              <Select
                selectedItem={selectedLawyer}
                items={allLawyers}
                handleChange={this.handleLawyerChange}
              />
            </FormInput>
            <input onClick={this.handleClick} type='submit' value='Submit' />
          </form>
        </div>
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
