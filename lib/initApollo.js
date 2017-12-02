import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

const link = createHttpLink({
  uri: process.browser ? '/graphql' : 'http://localhost:3000/graphql',
  credentials: 'same-origin'
})

const cache = new InMemoryCache({
  addTypename: false
})

const create = initialState => {
  return new ApolloClient({
    link,
    cache: cache.restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: true
  })
}

const initApollo = initialState => {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }
  return apolloClient
}

export default initApollo
