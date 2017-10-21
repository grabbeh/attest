import { gql, graphql } from 'react-apollo'

function ContractsList ({ data: { contracts } }) {
  if (contracts && contracts.length) {
    return (
      <section>
        <ul>
          {contracts.map((contract, index) => (
            <li key={contract.id}>
              <div>
                {contract.internalParties.map(i => <div> {i}</div>)}
              </div>
            </li>
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
