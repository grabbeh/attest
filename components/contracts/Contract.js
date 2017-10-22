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
      {internalParties.map(party => <div className='b'>{party}</div>)}
    </div>
    <div>{externalParties.map(party => <div>{party}</div>)}</div>
    <div>{tags.map(tag => <div>{tag}</div>)}</div>
    <div>{status}</div>
    <div>{businessUnit}</div>

  </ContractHolder>
)
