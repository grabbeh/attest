import ADD_CONTRACT_MUTATION from '../../queries/AddContractMutation'
import CONTRACT_METADATA_QUERY from '../../queries/ContractMetaDataQuery'
import { graphql, compose } from 'react-apollo'
import react from 'react'
import Header from './Header'
import Input from './Input'
import cn from 'classnames'
import CheckBox from './CheckBox'
import redirect from '../../lib/Redirect'

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
    let { contract } = this.state

    let businessUnitSelect = null
    businessUnitSelect = (
      <div className='mb2'>
        <select
          value={this.state.selectedBusinessUnit}
          key={this.state.selectedBusinessUnit}
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
    let lawyerSelect = null
    lawyerSelect = (
      <div className='mb2'>
        <select
          value={this.state.selectedLawyer}
          key={this.state.selectedLawyer}
          onChange={this.handleLawyerChange}
        >
          {allLawyers.map(l => (
            <option key={l.id} value={l.id}>
              {`${l.firstName} ${l.lastName}`}
            </option>
          ))}
        </select>
      </div>
    )
    let statusRadios = null
    statusRadios = allStatuses.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          className={cn(
            'pointer',
            'fr',
            'f5',
            'pa1',
            'black',
            'mb2',
            s.name === this.state.selectedStatus && 'white',
            s.name === this.state.selectedStatus && 'bg-dark-sur'
          )}
        >
          <input
            className='dn'
            type='radio'
            value={s.name}
            checked={s.name === this.state.selectedStatus}
            onChange={this.handleStatusChange}
          />
          {s.name}
        </label>
      </div>
    ))
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

    console.log(this.state)

    let { externalParties } = this.state.contract

    return (
      <div>
        <Header client={this.props.client} user={this.props.loggedUser} />
        <div className='center pa3 mw6 bg-haus mt3'>
          <form>
            <div className='b f4 bb bw1 w-100 pv2'>Add contract</div>
            <Input
              onChange={this.saveToState}
              value={this.state.externalParties}
              placeholder='External party'
              label='External party'
              name='externalParty'
            />
            <div className='cf' />
            <div className='b mt2'>Tags</div>
            <div className='pv2 fl list flex flex-wrap w-100 bb bw1'>
              {tagInputs}
            </div>
            <div className='cf' />
            <div className='b mt2'>Status</div>
            <div className='fl pv2 bb bw1 w-100'>
              {statusRadios}
            </div>
            <div className='cf' />
            <div className='b mt2'>Business Units</div>
            <div className='fl pv2 bb bw1 w-100'>
              {businessUnitSelect}
            </div>
            <div className='cf' />
            <div className='b mt2'>Lawyer</div>
            <div className='pv2 bb bw1 w-100 mb2'>{lawyerSelect}</div>
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
