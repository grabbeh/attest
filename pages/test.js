import React, { Component } from 'react'
import TestProvider from '../lib/TestProvider'
import { Consumer } from '../lib/Context'
import Loading from '../components/general/Loading'

class TestConsumer extends Component {
  render () {
    return (
      <TestProvider>
        <Test />
      </TestProvider>
    )
  }
}

class Test extends Component {
  render () {
    return (
      <Consumer>
        {context => <Loading />}
      </Consumer>
    )
  }
}

export default TestConsumer
