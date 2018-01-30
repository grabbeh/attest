import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Header from '../components/general/Header'

export default ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return (
      <div>
        <Header client={this.props.client} user={this.props.user} />
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}
