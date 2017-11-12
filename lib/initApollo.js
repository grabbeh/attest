import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null
let GRAPHQL_SERVER = null
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  GRAPHQL_SERVER = 'http://207.154.247.21/8000/graphql'
} else {
  GRAPHQL_SERVER = 'http://localhost:8000/graphql'
}

if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:8000/graphql',
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
