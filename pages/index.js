import react from 'react'
import Page from '../components/Page'
import LandingPage from '../components/LandingPage'

export default class extends react.Component {
  render () {
    return (
      <Page>
        <LandingPage />
      </Page>
    )
  }
}
