import mongoose from 'mongoose'
import generator from '../../data/compiled/data'
mongoose.Promise = require('bluebird')

const db = require('../../config/db.js')
mongoose.connect(db, { useMongoClient: true })

const ContractSchema = mongoose.Schema({
  ownerEntity: String,
  masterEntityID: String,
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
  assignedTo: String
})

const Contract = mongoose.model('contract', ContractSchema)

const LawyerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  masterEntityID: String
})

const Lawyer = mongoose.model('lawyer', LawyerSchema)

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  masterEntityID: String
})

const User = mongoose.model('user', UserSchema)

const MasterEntitySchema = mongoose.Schema({
  name: String,
  businessUnits: Array,
  statuses: Array,
  tags: Array,
  lawyers: Array,
  relatedEntities: Array
})

const MasterEntity = mongoose.model('masterEntity', MasterEntitySchema)

export { Contract, Lawyer, User, MasterEntity }

/*
mastEntities.forEach(c => {
  new CustomerEntity(c).save((err, res) => {
    if (err) console.log(err)
    console.log('Done')
  })
})

User.find().exec((err, ents) => {
  if (err) console.log(err)
  ents.forEach(c => {
    c.remove()
  })
})

const contracts = generator(100)

contracts.forEach(c => {
  new Contract(c).save((err, res) => {
    if (err) console.log(err)
  })
})
*/
