import ContractHolder from './ContractHolder'
import Moment from 'react-moment'
import React from 'react'

class Contract extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    const {
      internalParties,
      externalParties,
      tags,
      status,
      businessUnit,
      effectiveDate
    } = this.props

    let date = null
    if (effectiveDate) {
      date = <Moment format='DD-MM-YYYY'>{effectiveDate}</Moment>
    }
    return (
      <ContractHolder status={status}>
        <div>
          {externalParties.map(party => (
            <div className='pb1 b bb'>{party}</div>
          ))}
        </div>
        <div className='mt1'>
          {internalParties.map(party => <div>{party}</div>)}
        </div>
        <div>
          <ul className='list ma0 pa0'>
            {tags.map(tag => (
              <li className='bg-navy white fl pa1 mr1 mv1'>{tag}</li>
            ))}
          </ul>

        </div>
        <div className='cf' />

        <div>{businessUnit}</div>
        <div className='mt1'>{status}</div>
        <div>{date}</div>
        <div className='mt1'>
          <div><i className=' fr mt1 fa fa-pencil' /></div>
          <div><i className='mr2 fr mt1 fa fa-user' /></div>
          <div><i className='mr2 fr mt1 fa fa-eye' /></div>
          <div><i className='mr2 fr mt1 fa fa-plus-square' /></div>
        </div>
      </ContractHolder>
    )
  }
}

export default Contract
