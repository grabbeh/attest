import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import fetch from 'isomorphic-fetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

const cache = new InMemoryCache({
  addTypename: false
})

const create = (initialState, { getToken }) => {
  const httpLink = createHttpLink({
    uri: process.browser ? '/graphql' : 'http://localhost:3000/graphql',
    credentials: 'same-origin'
  })

  const authLink = new ApolloLink((operation, forward) => {
    const token = getToken()
    operation.setContext({
      headers: {
        authorization: token
      }
    })
    return forward(operation)
  })

  const link = authLink.concat(httpLink)

  return new ApolloClient({
    link,
    cache: cache.restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: true
  })
}

const initApollo = (initialState, options) => {
  console.log(initialState)
  if (!process.browser) {
    console.log('Server create')
    return create(initialState, options)
  }
  if (!apolloClient) {
    console.log('No apollo client')
    // Reuse client on the client-side
    apolloClient = create(initialState, options)
  }
  return apolloClient
}

export default initApollo
