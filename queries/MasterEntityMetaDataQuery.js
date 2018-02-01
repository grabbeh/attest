import gql from 'graphql-tag'

export default gql`
  query masterEntity($masterEntityID: String) {
    masterEntity(masterEntityID: $masterEntityID) {
      businessUnits
      statuses
      tags
      lawyers
      id
  }
}
`
