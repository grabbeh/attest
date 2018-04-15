import gql from 'graphql-tag'

export default gql`
query{
  masterEntity {
    name
    businessUnits {
      name
      color
    }
    statuses {
      name
      color
    }
    tags {
      name
      color
    }
  }
  allUsers {
    name
    email
    id
  }
}`
