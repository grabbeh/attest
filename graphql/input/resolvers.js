import {
  Contract,
  Lawyer,
  Status,
  Tag,
  User,
  BusinessUnit,
  MasterEntity
} from './connectors'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
    contracts: async (root, { masterEntityID }, context) => {
      let contracts = await Contract.find({
        masterEntityID: masterEntityID
      })
      return contracts
    },
    contract: (root, { id }) => {
      return Contract.findOne({ id })
    },
    allStatuses: async (root, args, context) => {
      let allStatuses = await Status.find({
        masterEntityID: context.user.masterEntityID
      })
      return allStatuses
    },
    allLawyers: async (root, args, context) => {
      let allLawyers = await Lawyer.find({
        masterEntityID: context.user.masterEntityID
      })
      return allLawyers
    },
    allTags: async (root, args, { user }) => {
      let allTags = await Tag.find({
        masterEntityID: user.masterEntityID
      })
      return allTags
    },
    allBusinessUnits: async (root, args, context) => {
      let allUnits = await BusinessUnit.find({
        masterEntityID: context.user.masterEntityID
      })
      return allUnits
    },
    allMasterEntities: async (root, args) => {
      let allCustomerEntities = await MasterEntity.find()
      return allCustomerEntities
    },
    user: async (root, args, context) => {
      if (context.user) {
        let user = await User.findById(
          mongoose.Types.ObjectId(context.user._id)
        )
        return user
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
    addContract: (roots, { contract }, { user }) => {
      if (contract.assignedTo && contract.assignedTo.id) {
        contract.assignedTo = contract.assignedTo.id
      } else {
        contract.assignedTo = 'UNASSIGNED'
      }
      contract.masterEntityID = user.masterEntityID
      console.log(contract)
      return Contract.create(contract)
    },
    deleteContract: (root, args) => {
      return Contract.findByIdAndRemove(args.id)
    },
    deleteUser: (root, args) => {
      return User.find({ email: args.email }).remove()
    },
    createAdminAccount: async (root, { masterEntity, email, password }) => {
      const newMasterEntity = await MasterEntity.create({ masterEntity })
      const existingUser = await User.findOne({ email })
      if (existingUser) throw new Error('Email already registered')
      password = await bcrypt.hash(password, 10)
      let masterEntityID = newMasterEntity._id
      let user = { email, password, masterEntityID }

      return User.create(user)
      // Maybe just let user create account w/out validation for now
    },
    addUser: async (root, args) => {
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
      const token = jwt.sign({ user }, SECRET, {
        expiresIn: '365d'
      })
      return token
    }
  },
  Contract: {
    assignedTo: async contract => {
      let response = await Lawyer.find({ id: contract.assignedTo })
      return response
    }
  }
}

export default resolvers
