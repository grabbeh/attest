import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Loading from '../components/general/Loading'

const WithLoading = ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return this.props.loading
      ? <Loading />
      : <ComposedComponent {...this.props} />
  }
}

export default WithLoading
