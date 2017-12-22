import gql from 'graphql-tag'

export default gql`
query {
  loggedUser {
    id
    email
    parentEntity
  }
  allStatuses {
    name
  }
  allLawyers {
    firstName
    lastName
    id
  }
  allTags {
    name
  }
  allBusinessUnits {
    name
  }
}
`
