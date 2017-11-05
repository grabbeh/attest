import Contract from './Contract'

export default ({ filteredContracts }) => (
  <div>
    {filteredContracts.length > 0
      ? <div>
        <div className='cf' />
        <section className='mt3 mb4'>
          <ul className='flex flex-wrap list pa0 ma0'>
            {filteredContracts.map(contract => <Contract {...contract} />)}
          </ul>
        </section>
      </div>
      : <div className='mt2'>No matching contracts</div>}
  </div>
)
