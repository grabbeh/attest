import DeleteButton from './DeleteButton'
import EditContractModal from '../../modals/EditContractModal'
import Moment from 'react-moment'
import React from 'react'
import Modal from 'react-modal'
import _ from 'underscore'
import cn from 'classnames'
import StatusBar from './StatusBar'
import DateBar from './DateBar'
import TagList from './TagList'
import Lawyer from './Lawyer'
import BusinessUnit from './BusinessUnit'
import PartyList from './PartyList'

class Contract extends React.Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      editableContract: ''
    }
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
    let effectiveDate = _.last(statuses).date
    const data = this.props

    return (
      <div>
        <div>
          <div>
            {externalParties.map(party => (
              <div key={party} className='pb1 b bb'>{party}</div>
            ))}
          </div>
          <PartyList parties={internalParties} />
          <div className='cf' />
          <BusinessUnit businessUnit={businessUnit} />
          <Lawyer {...assignedTo} />
          <StatusBar status={currentStatus} bold />
          {currentStatus === 'Executed'
            ? <DateBar date={effectiveDate} />
            : null}
          {tags ? <TagList tags={tags} /> : null}
          <div className='cf' />
        </div>
        <div className='bottom-0'>
          <ul className='fr list pa0 mt2'>
            <li className='fl mr2'>
              <button
                className='bg-haus f6 link dim ph0 dib'
                onClick={() => this.openModal(this.props.contract)}
              >
                <i className='pointer fa fa-pencil' />
              </button>
              {this.state.editableContract
                ? <EditContractModal
                  isOpen={this.state.modalIsOpen}
                  closeModal={this.closeModal}
                  contract={this.state.editableContract}
                  {...data}
                  />
                : <div />}
            </li>
            <li className='fl mr2 '><DeleteButton id={id} /></li>
            <li className='fl mr2'><i className='fa fa-eye' /></li>
            <li className='fl'><i className='fa fa-plus-square' /></li>
          </ul>
        </div>
        <div className='cf' />
      </div>
    )
  }
}

export default Contract
