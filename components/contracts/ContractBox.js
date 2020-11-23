import DeleteButton from './DeleteButton'
import FavouriteButton from './FavouriteButton'
import EditContractContainer from '../modals/EditContractContainer'
import { Component, Fragment } from 'react'
import _ from 'lodash'
import cn from 'classnames'
import StatusBar from './StatusBar'
import DateBar from './DateBar'
import TagList from './TagList'
import Lawyer from './Lawyer'
import BusinessUnit from './BusinessUnit'
import PartyList from './PartyList'
import Link from 'next/link'
import FadeBox from '../styles/FadeBox'
import ClearFix from '../styles/ClearFix'

class Contract extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      editableContract: '',
      active: true
    }
  }

  openModal = contract => {
    this.setState({
      modalIsOpen: true,
      editableContract: contract
    })
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
      statuses,
      favourite
    } = this.props.contract

    let latestDate = _.last(statuses).date
    const { masterEntity, allUsers } = this.props

    return (
      <Fragment>
        <div>
          <div>
            {externalParties.map(party => (
              <div key={party} className='f3 pb1 bb b--black-20 bw1'>
                {party}
              </div>
            ))}
          </div>
          <PartyList parties={internalParties} />
          <div className='cf' />
          <BusinessUnit businessUnit={businessUnit} />
          <Lawyer {...assignedTo} />
          <StatusBar status={currentStatus} bold />
          <DateBar date={latestDate} />
          {tags ? <TagList tags={tags} /> : null}
          <div className='cf' />
        </div>
        <div>
          <ul className='fr list pa0 mt2'>
            <li className='fl mr2'>
              <button
                className='bg-light-gray link dim ph0 dib'
                onClick={() => this.openModal(this.props.contract)}
              >
                <i className='pointer fa fa-pencil' />
              </button>
              {this.state.editableContract && (
                <EditContractContainer
                  isOpen={this.state.modalIsOpen}
                  closeModal={this.closeModal}
                  contract={this.state.editableContract}
                />
              )}
            </li>
            <li
              onClick={() => this.setState({ active: false })}
              className='fl mr2 '
            >
              <DeleteButton id={id} />
            </li>
            <li className='fl mr2'>
              <FavouriteButton favourite={favourite} id={id} />
            </li>
            <li className='fl'>
              <Link href={`/contract?id=${id}`}>
                <a>
                  <i className='dark-gray dim fa fa-file' />
                </a>
              </Link>
            </li>
          </ul>
          <ClearFix />
        </div>
      </Fragment>
    )
  }
}

export default Contract
