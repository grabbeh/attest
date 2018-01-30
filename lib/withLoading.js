import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Loading from '../components/general/Loading'

export default ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    console.log(this.props)
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return this.props.loading
      ? <Loading />
      : <ComposedComponent {...this.props} />
  }
}
