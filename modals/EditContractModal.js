import react from 'react'
import Modal from 'react-modal'
import CheckBox from '../components/general/CheckBox'
import FormButton from '../components/styles/FormButton'
import ClearFix from '../components/styles/ClearFix'
import FormTitle from '../components/styles/FormTitle'
import FormSection from '../components/styles/FormSection'
import SectionTitle from '../components/styles/SectionTitle'
import _ from 'lodash'
import Moment from 'moment'
import cn from 'classnames'
import { graphql } from 'react-apollo'
import UPDATE_CONTRACT_MUTATION from '../queries/UpdateContractMutation'
import CONTRACTS_QUERY from '../queries/ContractsQuery'

class EditContractModal extends react.Component {
  constructor (props) {
    super(props)
    this.state = {
      contract: {
        assignedTo: {
          id: ''
        }
      },
      selectedStatus: '',
      selectedLawyer: '',
      selectedBusinessUnit: ''
    }
  }

  componentWillMount () {
    let copy = _.cloneDeep(this.props.contract)
    if (copy) {
      this.setState({
        contract: _.omit(copy, 'lawyerName'),
        selectedStatus: copy.currentStatus,
        selectedLawyer: copy.assignedTo.id,
        selectedBusinessUnit: copy.businessUnit
      })
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.props.updateContract(this.state.contract, this.props.closeModal)
  }

  saveToState = e => {
    let { contract } = this.state
    let { name, value, type } = e.target
    contract[name] = value
    this.setState({ contract: contract })
  }

  deleteItem = (tag, index) => {
    let { contract } = this.state
    contract.tags = _.without(contract.tags, tag)
    this.setState({ contract: contract })
  }

  handleStatusChange = e => {
    let { contract } = this.state
    let status = e.target.value
    let date = new Date().getTime()
    contract.statuses.push({ status, date })
    contract.currentStatus = status
    this.setState({ selectedStatus: status, contract: contract })
  }

  handleLawyerChange = e => {
    let id = e.target.value
    let { contract } = this.state
    const { lawyers } = this.props.data
    lawyers.forEach(lawyer => {
      if (lawyer.id == id) {
        let newLawyer = lawyer
        contract.assignedTo = newLawyer
        this.setState({ contract: contract, selectedLawyer: id })
      }
    })
  }

  handleBusinessUnitChange = e => {
    let selectedUnit = e.target.value
    let { contract } = this.state
    const { businessUnits } = this.props.data
    businessUnits.forEach(unit => {
      if (selectedUnit == unit) {
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

  processTags = (tags, currentTags) => {
    let result = tags.map(tag => {
      let checked = false
      currentTags.map(a => {
        if (a === tag) {
          checked = true
        }
      })
      return {
        checked: checked,
        name: tag
      }
    })
    return result
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
    let { isOpen, closeModal } = this.props
    let { lawyers, statuses, businessUnits } = this.props.data
    let { contract } = this.state

    let businessUnitSelect = null
    businessUnitSelect = (
      <div className='mb2'>
        <select
          className='pa1 ba b--blue bw1'
          value={this.state.selectedBusinessUnit}
          key={this.state.selectedBusinessUnit}
          onChange={this.handleBusinessUnitChange}
        >
          {businessUnits.map(unit => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    )
    let lawyerSelect = null
    if (lawyers.length > 0) {
      lawyerSelect = (
        <div className='mb2'>
          <select
            className='pa1 ba b--blue bw1'
            value={this.state.selectedLawyer}
            key={this.state.selectedLawyer}
            onChange={this.handleLawyerChange}
          >
            {lawyers.map(l => (
              <option key={l.id} value={l.id}>
                {`${l.firstName} ${l.lastName}`}
              </option>
            ))}
          </select>
        </div>
      )
    }
    let statusRadios = null
    statusRadios = statuses.map(s => (
      <div key={s} className='fl mr2'>
        <label
          className={cn(
            s === this.state.selectedStatus && 'white',
            s === this.state.selectedStatus && 'bg-blue',
            'pointer',
            'fr',
            'f5',
            'ph3',
            'pv1',
            'ba',
            'b--blue',
            'bw1',
            'mb2'
          )}
        >
          <input
            className='dn'
            type='radio'
            value={s}
            checked={s === this.state.selectedStatus}
            onChange={this.handleStatusChange}
          />
          {s}
        </label>
      </div>
    ))
    let tagInputs = null
    if (contract.tags) {
      let { tags } = this.props.data
      let updatedTags = this.processTags(tags, contract.tags)
      tagInputs = updatedTags.map(t => (
        <div className='list'>
          <CheckBox
            key={t.name}
            handleCheckboxChange={this.handleCheckboxChange}
            checked={t.checked}
            label={t.name}
            value={t.name}
          />
        </div>
      ))
    }

    return (
      <div>
        {contract
          ? <Modal
            className='content ma3 pa0 w-50-ns w-100 center'
            overlayClassName='overlay'
            isOpen={isOpen}
            onRequestClose={closeModal}
            >
            <div className='pa3 ma0 bg-white'>
              <div className='fr'>
                <button
                  className='f6 link dim mb2 ph0 dib bg-white'
                  onClick={closeModal}
                  >
                  <i className='pointer  fa fa-close fa-lg' />
                </button>
              </div>
              <form>
                <FormTitle title='Edit contract' />
                <FormSection>
                  <SectionTitle text='Tags' />
                  {tagInputs}
                </FormSection>
                <ClearFix />
                <FormSection>
                  <SectionTitle text='Status' />
                  {statusRadios}
                </FormSection>
                <ClearFix />
                <FormSection>
                  <SectionTitle text='Business units' />
                  {businessUnitSelect}
                </FormSection>
                <ClearFix />
                <FormSection>
                  <SectionTitle text='Lawyer' />
                  {lawyerSelect}
                </FormSection>
                <ClearFix />
                <div className='mt2'>
                  <FormButton onClick={this.handleClick} text='Submit' />
                </div>
                <ClearFix />
              </form>
            </div>
          </Modal>
          : <div />}
      </div>
    )
  }
}

export default graphql(UPDATE_CONTRACT_MUTATION, {
  props ({ ownProps, mutate }) {
    return {
      updateContract (contract, closeModal) {
        let id = contract.id
        return mutate({
          variables: { contract },
          update: (store, response) => {
            let updatedContract = response.data.updateContract
            const data = store.readQuery({ query: CONTRACTS_QUERY })
            _.extend(_.find(data.contracts, { id }), updatedContract)
            store.writeQuery({ query: CONTRACTS_QUERY, data })
            closeModal()
          }
        })
      }
    }
  }
})(EditContractModal)
