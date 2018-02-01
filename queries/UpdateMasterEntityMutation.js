import gql from 'graphql-tag'

export default gql`
mutation updateMasterEntity($id: ID!, $masterEntity: PostMasterEntity) {
  updateMasterEntity(id: $id, masterEntity: $masterEntity) {
    id
    name
    businessUnits
  }
}
`
