import { AuthPage } from '../components/Page'
import { graphql } from 'react-apollo'
import react from 'react'
import gql from 'graphql-tag'

const DATA_QUERY = gql`
  query masterEntity($masterEntityID: String) {
    masterEntity(masterEntityID: $masterEntityID) {
      businessUnits
      statuses
      tags
      lawyers
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
    return <div>Test</div>
  }
}

const TestPageWithQuery = graphql(DATA_QUERY, {
  options: props => ({
    variables: { masterEntityID: props.user.masterEntityID }
  }),
  props: ({ data }) => ({
    data
  })
})(TestComponent)

export default TestPageWithData
