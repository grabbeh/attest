import { Contract, Lawyer, User, MasterEntity } from './connectors'
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
    allMasterEntities: async (root, args) => {
      let allCustomerEntities = await MasterEntity.find()
      return allCustomerEntities
    },
    masterEntity: async (root, { masterEntityID }) => {
      let entity = await MasterEntity.findById(masterEntityID)
      return entity
    },
    user: async (root, args, { user }) => {
      if (user) {
        let fullUser = await User.findById(mongoose.Types.ObjectId(user._id))
        return fullUser
      }
      return null
    },
    allUsers: (root, args) => {
      return User.find()
    }
  },
  Mutation: {
    updateMasterEntity: (root, { masterEntity }) => {
      console.log('Mutation requested')
      return MasterEntity.findByIdAndUpdate(
        mongoose.Types.ObjectId(masterEntity.id),
        masterEntity,
        {
          new: true
        }
      )
    },
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
      return Contract.create(contract)
    },
    deleteContract: (root, args) => {
      return Contract.findByIdAndRemove(args.id)
    },
    deleteUser: (root, args) => {
      return User.find({ email: args.email }).remove()
    },
    createAdminAccount: async (root, { name, email, password }) => {
      const newMasterEntity = await MasterEntity.create({ name })
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
