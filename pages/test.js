import React, { Component } from 'react'
import TestProvider from '../lib/TestProvider'
import { Consumer } from '../lib/Context'

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
        {context => {
          console.log(context)
        }}
      </Consumer>
    )
  }
}

export default TestConsumer
