import { Contract, Lawyer, Status, Tag, User } from './connectors'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

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
    contracts: (root, args) => {
      return Contract.find()
    },
    contract: (root, { id }) => {
      return Contract.findOne({ id })
    },
    allStatuses: (root, args) => {
      return Status.find()
    },
    allLawyers: (root, args) => {
      return Lawyer.find()
    },
    allTags: (root, args) => {
      return Tag.find()
    },
    loggedUser: async (root, args, { user }) => {
      if (user) {
        return User.findById(mongoose.Types.ObjectId(user.id))
      }
      return null
    },
    allUsers: (root, args) => {
      return User.find()
    }
  },
  Mutation: {
    updateContract: (root, { contract, id }) => {
      contract.assignedTo = contract.assignedTo.id
      return Contract.findByIdAndUpdate(mongoose.Types.ObjectId(id), contract, {
        new: true
      })
    },
    addContract: (roots, args) => {
      const contract = args
      return Contract.create(contract)
    },
    deleteContract: (root, args) => {
      return Contract.findByIdAndRemove(args.id)
    },
    register: async (root, args) => {
      const user = args
      user.password = await bcrypt.hash(user.password, 10)
      return User.create(user)
    },
    login: async (root, { email, password }, { SECRET }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new Error('Unknown user')
      }
      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) {
        throw new Error('Invalid password')
      }
      const token = jwt.sign({ user: _.pick(user, ['id', 'email']) }, SECRET, {
        expiresIn: '1d'
      })
      return token
    }
  },
  Contract: {
    assignedTo: async contract => {
      let response = await Lawyer.findOne({ id: contract.assignedTo })
      return response
    }
  }
}

export default resolvers
