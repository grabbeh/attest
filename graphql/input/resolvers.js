const resolvers = {
  Query: {
    contracts (root, args) {
      return [
        { name: 'ACME INC', id: 1, department: 'Facilities' },
        { name: 'ACME TRAVEL INC', id: 2, department: 'Marketing' }
      ]
    }
  }
}

export default resolvers
