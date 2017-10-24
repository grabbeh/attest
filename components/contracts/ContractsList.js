import { gql, graphql } from 'react-apollo'
import Contract from './Contract'

function ContractsList ({ data: { contracts } }) {
  if (contracts && contracts.length) {
    return (
      <section className='mh2 mt2 mb3'>
        <ul className='list pa0 ma0'>
          {contracts.map((contract, index) => (
            <li><Contract {...contract} /></li>
          ))}
        </ul>
        <style jsx>{`   
         
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

const contracts = gql`
  query {
    contracts {
      id
      internalParties
      externalParties
      effectiveDate
      status
      tags
      businessUnit
      assignedTo
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(contracts, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(ContractsList)
