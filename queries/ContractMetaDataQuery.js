import gql from 'graphql-tag'

export default gql`
  query masterEntity {
    allUsers {
      email
      name
      id
    }
    masterEntity {
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
      relatedEntities
  }
}
`
