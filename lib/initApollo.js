import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    addTypename: false,
    networkInterface: createNetworkInterface({
      uri: process.browser ? '/graphql' : 'http://localhost:3000/graphql',
      opts: {
        credentials: 'same-origin'
      }
    })
  })
}

export default function initApollo (initialState) {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
