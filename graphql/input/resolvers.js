import { Contract, Lawyer, Status, Tag, User, BusinessUnit } from './connectors'
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
    contracts: async (root, args) => {
      let contracts = await Contract.find()
      return contracts
    },
    contract: (root, { id }) => {
      return Contract.findOne({ id })
    },
    allStatuses: async (root, args) => {
      let allStatuses = await Status.find()
      return allStatuses
    },
    allLawyers: async (root, args) => {
      let allLawyers = await Lawyer.find()
      return allLawyers
    },
    allTags: async (root, args) => {
      let allTags = await Tag.find()
      return allTags
    },
    allBusinessUnits: async (root, args) => {
      let allUnits = await BusinessUnit.find()
      return allUnits
    },
    loggedUser: async (root, args, context) => {
      if (context.user) {
        let loggedUser = await User.findById(
          mongoose.Types.ObjectId(context.user.id)
        )
        return loggedUser
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
        expiresIn: '365d'
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
