import react from 'react'
import Modal from 'react-modal'
import CheckBox from '../components/contracts/CheckBox'
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
    const { allLawyers } = this.props.data
    allLawyers.forEach(lawyer => {
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
    const { allBusinessUnits } = this.props.data
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

  processTags = (allTags, currentTags) => {
    let result = allTags.map(tag => {
      let checked = false
      currentTags.map(a => {
        if (a === tag.name) {
          checked = true
        }
      })
      return {
        checked: checked,
        name: tag.name
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
    console.log(this.props)
    let { allLawyers, allStatuses, allBusinessUnits } = this.props.data
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
            s.name === this.state.selectedStatus && 'white',
            s.name === this.state.selectedStatus && 'bg-dark-sur',
            'pointer',
            'fr',
            'f5',
            'pa1',
            'bg-white',
            'black',
            'mb2'
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
    if (contract.tags) {
      let { allTags } = this.props.data
      let updatedTags = this.processTags(allTags, contract.tags)
      tagInputs = updatedTags.map(t => (
        <CheckBox
          key={t.name}
          handleCheckboxChange={this.handleCheckboxChange}
          checked={t.checked}
          label={t.name}
          value={t.name}
        />
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
            <div className='pa3 ma0 bg-haus'>
              <div className='fr'>
                <button
                  className='f6 link dim mb2 ph0 dib bg-haus'
                  onClick={closeModal}
                  >
                  <i className='pointer  fa fa-window-close fa-lg' />
                </button>
              </div>
              <div className='b pb2 bb bw1'>Edit Contract</div>
              <form>
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
                <div className='mt2'>
                  <button onClick={this.handleClick}>Submit</button>
                </div>
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
        const id = contract.id
        return mutate({
          variables: { id, contract },
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
