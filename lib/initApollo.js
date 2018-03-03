import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
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

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const authLink = new ApolloLink((operation, forward) => {
    let token = getToken()
    if (!token) token = ''
    operation.setContext({
      headers: {
        authorization: token
      }
    })
    return forward(operation)
  })

  const link = ApolloLink.from([authLink, errorLink, httpLink])

  return new ApolloClient({
    link,
    cache: cache.restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: true,
    dataIdFromObject: object => object.id
  })
}

const initApollo = (initialState, options) => {
  if (!process.browser) {
    return create(initialState, options)
  }
  if (!apolloClient) {
    // Reuse client on the client-side
    apolloClient = create(initialState, options)
  }
  return apolloClient
}

export default initApollo
