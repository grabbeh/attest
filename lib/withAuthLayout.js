import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import Header from '../components/general/Header'
import SideColumn from '../components/side-menu/SideColumn'

export default ComposedComponent => class WithLayout extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render () {
    return (
      <div>
        <Header client={this.props.client} user={this.props.user} />
        <SideColumn>
          <ComposedComponent {...this.props} />
        </SideColumn>
      </div>
    )
  }
}
