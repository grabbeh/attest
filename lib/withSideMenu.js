import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import SideColumn from '../components/side-menu/SideColumn'

export default ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return (
      <div>
        <SideColumn />
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}
