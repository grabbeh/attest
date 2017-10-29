import ContractHolder from './ContractHolder'
import Moment from 'react-moment'
import React from 'react'

class Contract extends React.Component {
  render () {
    const {
      internalParties,
      externalParties,
      tags,
      status,
      businessUnit,
      effectiveDate,
      assignedTo
    } = this.props

    let date = null
    if (effectiveDate) {
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
              <li key={tag} className='bg-navy white fl pv1 ph2 mr1 mv1'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <ContractHolder status={status}>
        <div>
          {externalParties.map(party => (
            <div key={party} className='pb1 b bb'>{party}</div>
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
        <div className='mt1 '>{status}</div>
        <div className='bb pb1'> {date}</div>
        <div>
          {tagDiv}
        </div>
        <div className='cf' />
        <ul className='list fr pa0 ma0'>
          <li className='fr mt1'><i className='fa fa-pencil' /></li>
          <li className='fr mr2 mt1'><i className='fa fa-trash-o' /></li>
          <li className='fr mr2 mt1'><i className='fa fa-eye' /></li>
          <li className='fr mr2 mt1'><i className='fa fa-plus-square' /></li>
        </ul>
        <div className='cf' />

      </ContractHolder>
    )
  }
}

export default Contract
