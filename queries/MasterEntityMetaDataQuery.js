import gql from 'graphql-tag'

export default gql`
  query masterEntity {
    masterEntity {
      businessUnits {
        name
      }
      statuses {
        name
        color
      }
      tags {
        name
      }
      lawyers
  }
}
`
