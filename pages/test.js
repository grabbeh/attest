import withData from '../lib/withData'
import { graphql } from 'react-apollo'
import react from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { Page, AuthPage } from '../components/Page'

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

const TestPageWithData = AuthPage(props => <TestPageWithQuery {...props} />)

class TestComponent extends react.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <div className='height blue'>
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
