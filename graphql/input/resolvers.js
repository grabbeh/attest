import { Contract, Lawyer, User, MasterEntity } from './connectors'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import _ from 'lodash'
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
    contracts: async (root, args, { user }) => {
      let contracts = await Contract.find({
        masterEntityID: user.masterEntityID
      })
      return contracts
    },
    contract: (root, { id }) => {
      return Contract.findOne({ id })
    },
    currentTags: async (root, args, { user }) => {
      let contracts = await Contract.find({
        masterEntityID: user.masterEntityID
      })
      let tags = _.uniq(
        _.map(_.flatten(_.concat(_.map(contracts, 'tags'))), 'name')
      )
      return tags
    },
    currentBusinessUnits: async (root, args, { user }) => {
      let contracts = await Contract.find({
        masterEntityID: user.masterEntityID
      })
      let businessUnits = _.uniq(
        _.map(_.map(contracts, 'businessUnit'), 'name')
      )
      return businessUnits
    },
    currentStatuses: async (root, args, { user }) => {
      let contracts = await Contract.find({
        masterEntityID: user.masterEntityID
      })
      let statuses = _.uniq(_.map(_.map(contracts, 'currentStatus'), 'name'))
      return statuses
    },
    currentLawyers: async (root, args, { user }) => {
      let contracts = await Contract.find({
        masterEntityID: user.masterEntityID
      })
      /*
      let lawyers = _.uniq(
        _.pick(
          _.flatten(_.map(contracts, 'assignedTo'), _.identity).map(a => {
            return `${a.firstName} ${a.lastName}`
          })
        )
      ) */
      return []
    },
    masterEntity: async (root, args, { user }) => {
      let entity = await MasterEntity.findById(user.masterEntityID)
      return entity
    },
    user: async (root, args, { user }) => {
      if (user) {
        let fullUser = await User.findById(user._id)
        return fullUser
      }
      return null
    },
    allUsers: (root, args) => {
      return User.find()
    }
  },
  Mutation: {
    updateMasterEntity: (root, { masterEntity }, { user }) => {
      return MasterEntity.findByIdAndUpdate(user.masterEntityID, masterEntity, {
        new: true
      })
    },
    updateContract: (root, { contract }) => {
      contract.assignedTo = contract.assignedTo.id
      return Contract.findByIdAndUpdate(contract.id, contract, {
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
