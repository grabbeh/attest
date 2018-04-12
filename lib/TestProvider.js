import React, { Component } from 'react'
import { Provider } from './Context'

class TestProvider extends Component {
  render () {
    return (
      <Provider value={{ user: 'Michael' }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default TestProvider
