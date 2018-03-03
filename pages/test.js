import withData from '../lib/withData'
import withUser from '../lib/withUser'
import { graphql } from 'react-apollo'
import { Component } from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { Page, UserPage } from '../components/Page'

const DATA_QUERY = gql`
  query  {
    thing
    masterEntity {
      id
    }
}
`

const TestPageWithData = withData(props => <TestPageWithQuery {...props} />)

class TestComponent extends Component {
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
