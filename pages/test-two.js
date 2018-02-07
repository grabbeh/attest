import { AuthPage, UserPage } from '../components/Page'
import withData from '../lib/withData'
import { compose, graphql } from 'react-apollo'
import react from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import ADD_CONTRACT_MUTATION from '../queries/AddContractMutation'

const DATA_QUERY = gql`
query masterEntity {
  masterEntity {
    businessUnits {
      name
    }
    statuses {
      name
      color
    }
    tags {
      name
    }
    lawyers
    relatedEntities
}
}
`

const AddContractMutation = graphql(ADD_CONTRACT_MUTATION, {
  props ({ mutate }) {
    return {
      addContract (contract) {
        return mutate({
          variables: { contract },
          update: (store, response) => {
            // redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const TestPageWithData = UserPage(props => <TestPageWithQuery {...props} />)

class TestComponent extends react.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <div>
        <div>Test</div>
        <Link href='/test'><a>Link</a></Link>
      </div>
    )
  }
}

const MetaDataQuery = graphql(DATA_QUERY, {
  props: ({ data }) => ({
    data
  })
})

const TestPageWithQuery = compose(MetaDataQuery, AddContractMutation)(
  TestComponent
)

export default TestPageWithData
