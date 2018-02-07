import gql from 'graphql-tag'

export default gql`
mutation updateMasterEntity($masterEntity: PostMasterEntity) {
  updateMasterEntity(masterEntity: $masterEntity) {
    id
    name
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
    relatedEntities
  }
}
`
