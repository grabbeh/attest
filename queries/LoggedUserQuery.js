import gql from 'graphql-tag'

export default gql`
  query user {
    user {
      id
      email
      masterEntityID
    }
  }
`
