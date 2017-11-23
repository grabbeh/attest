import ContractHolder from './ContractHolder'
import DeleteButton from './DeleteButton'
import EditContractModal from '../../modals/EditContractModal'
import Moment from 'react-moment'
import React from 'react'
import Modal from 'react-modal'
import _ from 'underscore'
import cn from 'classnames'

class Contract extends React.Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      editableContract: false
    }
    this.closeModal = this.closeModal.bind(this)
  }

  openModal = contract => {
    this.setState({ modalIsOpen: true, editableContract: contract })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render () {
    const {
      id,
      internalParties,
      externalParties,
      tags,
      currentStatus,
      businessUnit,
      assignedTo,
      statuses
    } = this.props.contract
    const lawyers = this.props.lawyers
    const allStatuses = this.props.statuses
    const allTags = this.props.tags

    let date = null
    if (_.last(statuses).status === 'Executed') {
      let effectiveDate = _.last(statuses).date
      date = (
        <div>
          <i className='mr2 mt1 fa fa-check-square-o' />
          <Moment format='DD-MM-YYYY'>{effectiveDate}</Moment>
        </div>
      )
    }
    let tagDiv = null
    if (tags) {
      tagDiv = (
        <div className='fl'>
          <ul className='list ma0 pa0'>
            {tags.map(tag => (
              <li
                key={tag}
                className='shadow-4 b f6 bg-blue white fl pv1 ph2 mr2 mv1'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <ContractHolder>
        <div>
          {externalParties.map(party => (
            <div key={party} className='pb1 b bb bw3 b--mid-gray'>{party}</div>
          ))}
        </div>
        <div className='mt1'>
          {internalParties.map(party => <div key={party}>{party}</div>)}
        </div>

        <div className='cf' />
        <div>
          <span>
            <i className='mr2 mt1 fa fa-building-o' />
            {businessUnit}
          </span>
        </div>
        <div>
          <span>
            <i className='mr2 mt1 fa fa-id-card-o' />
            {assignedTo.firstName + ' ' + assignedTo.lastName}
          </span>
        </div>
        <div
          className={cn(
            'mt1',
            'b',
            'pb1',
            currentStatus === 'Executed' && 'bb',
            currentStatus === 'Instructed' && 'bb',
            currentStatus === 'Drafted' && 'bb',
            currentStatus === 'Approved' && 'bb',
            currentStatus === 'Executed' && 'b--green',
            currentStatus === 'Instructed' && 'b--light-red',
            currentStatus === 'Drafted' && 'b--light-yellow',
            currentStatus === 'Approved' && 'b--light-green',
            currentStatus === 'Executed' && 'bw3',
            currentStatus === 'Instructed' && 'bw3',
            currentStatus === 'Drafted' && 'bw3',
            currentStatus === 'Approved' && 'bw3'
          )}
        >
          {currentStatus}
        </div>
        <div className='pb1'> {date}</div>
        <div>
          {tagDiv}
        </div>
        <div className='cf' />
        <ul className='fr list pa0 ma0 mt2'>
          <li className='fl mr2'>
            <button
              className=' f6 link dim mb2 ph0 dib light-gray bg-dark-gray'
              onClick={() => this.openModal(this.props.contract)}
            >
              <i className='pointer fa fa-pencil' />
            </button>
            {this.state.editableContract
              ? <EditContractModal
                isOpen={this.state.modalIsOpen}
                closeModal={this.closeModal}
                contract={this.state.editableContract}
                lawyers={lawyers}
                statuses={allStatuses}
                tags={allTags}
                />
              : <div />}

          </li>
          <li className='fl mr2 '><DeleteButton id={id} /></li>
          <li className='fl mr2'><i className='fa fa-eye' /></li>
          <li className='fl'><i className='fa fa-plus-square' /></li>
        </ul>
        <div className='cf' />

      </ContractHolder>
    )
  }
}

export default Contract
