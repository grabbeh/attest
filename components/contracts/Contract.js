import ContractHolder from './ContractHolder'
import Moment from 'react-moment'
import React from 'react'
import _ from 'underscore'
import cn from 'classnames'

class Contract extends React.Component {
  render () {
    const {
      internalParties,
      externalParties,
      tags,
      currentStatus,
      businessUnit,
      assignedTo,
      statuses
    } = this.props

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
        <div className='fl mt1 '>
          <ul className='list ma0 pa0'>
            {tags.map(tag => (
              <li
                key={tag}
                className='shadow-4 b f6 bg-purple white fl pv1 ph2 mr1 mv1'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <ContractHolder status={currentStatus}>
        <div>
          {externalParties.map(party => (
            <div key={party} className='pb1 b bb b--dark-gray'>{party}</div>
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
            currentStatus === 'Executed' && 'bb',
            currentStatus === 'Instructed' && 'bb',
            currentStatus === 'Drafted' && 'bb',
            currentStatus === 'Approved' && 'bb',
            currentStatus === 'Executed' && 'b--green',
            currentStatus === 'Instructed' && 'b--light-red',
            currentStatus === 'Drafted' && 'b--light-yellow',
            currentStatus === 'Approved' && 'b--light-green',
            currentStatus === 'Executed' && 'bw2',
            currentStatus === 'Instructed' && 'bw2',
            currentStatus === 'Drafted' && 'bw2',
            currentStatus === 'Approved' && 'bw2'
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
          <li className='fl mr2'><i className='fa fa-pencil' /></li>
          <li className='fl mr2 '><i className='fa fa-trash-o' /></li>
          <li className='fl mr2'><i className='fa fa-eye' /></li>
          <li className='fl'><i className='fa fa-plus-square' /></li>
        </ul>
        <div className='cf' />

      </ContractHolder>
    )
  }
}

export default Contract
