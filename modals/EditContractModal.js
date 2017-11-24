import react from 'react'
import Modal from 'react-modal'
import SubmitEditButton from '../components/contracts/SubmitEditButton'
import CheckBox from '../components/contracts/CheckBox'
import _ from 'underscore'
import Moment from 'moment'
import __ from 'lodash'

import cn from 'classnames'

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
      selectedLawyer: ''
    }
  }

  componentWillMount () {
    let copy = __.cloneDeep(this.props.contract)
    if (copy) {
      this.setState({
        contract: copy,
        selectedStatus: copy.currentStatus,
        selectedLawyer: copy.assignedTo.id
      })
    }
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
    let { lawyers } = this.props
    lawyers.forEach(lawyer => {
      if (lawyer.id == id) {
        let newLawyer = lawyer
        contract.assignedTo = newLawyer
        this.setState({ contract: contract, selectedLawyer: id })
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
    let { isOpen, closeModal, lawyers, statuses } = this.props
    let { contract } = this.state
    let lawyerSelect = null

    lawyerSelect = (
      <select
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
    )
    let statusRadios = null
    statusRadios = statuses.map(s => (
      <div key={s.name} className='fl mr2'>
        <label
          className={cn(
            s.name === this.state.selectedStatus && 'white',
            s.name === this.state.selectedStatus && 'bg-blue',
            'pointer',
            'fr',
            'f6',
            'b',
            'pa1',
            'shadow-4',
            'bg-dark-gray'
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
      let { tags } = this.props
      let updatedTags = this.processTags(tags, contract.tags)
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
            <div className='pa3 ma0 bg-dark-gray light-gray'>
              <div className='fr'>
                <button
                  className='f6 link dim mb2 ph0 dib light-gray bg-dark-gray'
                  onClick={closeModal}
                  >
                  <i className='pointer  fa fa-window-close fa-lg' />
                </button>
              </div>
              <div className='b'>Edit Contract</div>
              <form>
                <div className='b mt2'>Tags</div>
                <div className='pv2 fl list flex flex-wrap w-100 bb b--mid-gray'>
                  {tagInputs}
                </div>
                <div className='cf' />
                <div className='b mt2'>Status</div>
                <div className='fl pv2 bb b--mid-gray w-100'>
                  {statusRadios}
                </div>
                <div className='cf' />
                <div className='b mt2'>Lawyer</div>
                <div className='pv2 bb b--mid-gray w-100'>{lawyerSelect}</div>
                <div className='mt2'>
                  <SubmitEditButton
                    contract={this.state.contract}
                    id={this.state.contract.id}
                    closeModal={this.props.closeModal}
                    />
                </div>
              </form>
            </div>
          </Modal>
          : <div />}
      </div>
    )
  }
}

export default EditContractModal
