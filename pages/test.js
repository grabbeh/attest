import withData from '../lib/withData'
import { graphql } from 'react-apollo'
import react from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { Page, UserPage } from '../components/Page'

const DATA_QUERY = gql`
  query masterEntity {
    masterEntity {
      businessUnits {
        name
      }
      statuses {
        name
      }
  }
}
`

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
        <Link href='/test-two'><a>Link</a></Link>
      </div>
    )
  }
}

const TestPageWithQuery = graphql(DATA_QUERY, {
  props: ({ data }) => ({
    data
  })
})(TestComponent)

export default TestPageWithData
