const PartyList = ({ parties }) => (
  <div className='mt1'>
    {parties.map(party => <div key={party}>{party}</div>)}
  </div>
)

export default PartyList
