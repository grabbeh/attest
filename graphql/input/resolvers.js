import { Contract, Lawyer, Status, Tag } from './connectors'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import mongoose from 'mongoose'

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue (value) {
      return new Date(value) // value from the client
    },
    serialize (value) {
      return value.getTime() // value sent to the client
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10) // ast value is always in string format
      }
      return null
    }
  }),
  Query: {
    contracts (root, args) {
      return Contract.find()
    },
    contract (root, args) {
      return Contract.findOne({ id: args.id })
    },
    allStatuses (root, args) {
      return Status.find()
    },
    allLawyers (root, args) {
      return Lawyer.find()
    },
    allTags (root, args) {
      return Tag.find()
    }
  },
  Mutation: {
    updateContract (root, args) {
      args.contract.assignedTo = args.contract.assignedTo.id
      return Contract.findByIdAndUpdate(
        mongoose.Types.ObjectId(args.id),
        args.contract,
        { new: true }
      )
    },
    addContract (roots, args) {
      return Contract.create(args)
    },
    deleteContract (root, args) {
      return Contract.findByIdAndRemove(args.id)
    }
  },
  Contract: {
    assignedTo (contract) {
      return Lawyer.findOne({ id: contract.assignedTo }).then(res => {
        return res
      })
    }
  }
}

export default resolvers
