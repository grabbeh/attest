import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Header from '../components/general/Header'

const WithLayout = ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return (
      <div>
        <Header user={this.props.user} />
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}

export default WithLayout
