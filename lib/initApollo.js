import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { setContext } from 'apollo-link-context'
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
  const httpLink = new HttpLink({
    uri: process.browser ? '/api/graphql' : 'http://localhost:3000/api/graphql',
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

  const authLink = setContext((_, { headers }) => {
    let token = getToken()
    if (!token) token = ''
    return {
      headers: {
        ...headers,
        //  authorization: token ? `Bearer ${token}` : null
        authorization: token
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    link: authLink.concat(errorLink).concat(httpLink),
    cache: cache.restore(initialState || {}),
    ssrMode: !process.browser,
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
