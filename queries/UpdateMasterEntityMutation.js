import gql from 'graphql-tag'

export default gql`
mutation updateMasterEntity($masterEntity: PostMasterEntity) {
  updateMasterEntity(masterEntity: $masterEntity) {
    id
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
    relatedEntities
  }
}
`
