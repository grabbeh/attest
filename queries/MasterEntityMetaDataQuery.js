import gql from 'graphql-tag'

export default gql`
  query  {
    allUsers {
      name
      email
      id
      masterEntityID 
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
  }
}
`
