import ContractHolder from './ContractHolder'

export default ({
  internalParties,
  externalParties,
  tags,
  status,
  businessUnit
}) => (
  <ContractHolder status={status}>
    <div>
      {externalParties.map(party => <div className=' pb1 b bb'>{party}</div>)}
    </div>
    <div>{internalParties.map(party => <div>{party}</div>)}</div>
    <div>
      <ul className='list ma0 pa0'>
        {tags.map(tag => (
          <li className='bg-navy white fl pa1 mr1 mv1'>{tag}</li>
        ))}
      </ul>

    </div>
    <div className='cf' />

    <div>{businessUnit}</div>
    <div>{status}</div>

  </ContractHolder>
)
