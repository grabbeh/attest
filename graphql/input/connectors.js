import mongoose from 'mongoose'
import generator from '../../data/compiled/data'
mongoose.Promise = require('bluebird')

const db = require('../../config/db.js')
mongoose.connect(db, { useMongoClient: true })

const StatusSchema = mongoose.Schema({
  name: String
})

const Status = mongoose.model('status', StatusSchema)

const ContractSchema = mongoose.Schema({
  ownerEntity: String,
  internalParties: Array,
  externalParties: Array,
  expiryDate: Date,
  rollingTerm: Boolean,
  tags: Array,
  businessUnit: String,
  currentStatus: String,
  statuses: [
    {
      status: String,
      date: Date
    }
  ],
  lastUpdated: Date,
  client: Boolean,
  supplier: Boolean,
  assignedTo: Number
})

const Contract = mongoose.model('contract', ContractSchema)

const TagSchema = mongoose.Schema({
  name: String
})

const Tag = mongoose.model('tag', TagSchema)

const LawyerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  id: Number
})

const Lawyer = mongoose.model('lawyer', LawyerSchema)

const BusinessUnitSchema = mongoose.Schema({
  name: String
})

const BusinessUnit = mongoose.model('businessUnit', BusinessUnitSchema)

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  parentEntity: String
})

const User = mongoose.model('user', UserSchema)

const CustomerEntitySchema = mongoose.Schema({
  name: String
})

const CustomerEntity = mongoose.model('customerEntity', CustomerEntitySchema)

export { Contract, Lawyer, Status, Tag, BusinessUnit, User, CustomerEntity }

const customerEntities = [
  { name: 'B & W Enterprises' },
  { name: 'Derrick Inc' },
  { name: 'Albert Inc' }
]
/*
customerEntities.forEach(c => {
  new CustomerEntity(c).save((err, res) => {
    if (err) console.log(err)
    console.log('Done')
  })
})
*/
Contract.find().exec((err, contracts) => {
  if (err) console.log(err)
  console.log(contracts.length)
})
/*
const contracts = generator(100)

contracts.forEach(c => {
  new Contract(c).save((err, res) => {
    if (err) console.log(err)
  })
})
*/
