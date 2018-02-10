import gql from 'graphql-tag'

export default gql`
  query masterEntity {
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
      lawyers
  }
}
`
