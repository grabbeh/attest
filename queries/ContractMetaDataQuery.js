import gql from 'graphql-tag'

export default gql`
query {
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
