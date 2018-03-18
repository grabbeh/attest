import mongoose from 'mongoose'
mongoose.Promise = require('bluebird')

const ContractSchema = mongoose.Schema({
  ownerEntity: String,
  masterEntityID: String,
  internalParties: Array,
  externalParties: Array,
  expiryDate: Date,
  effectiveDate: Date,
  executionDate: Date,
  rollingTerm: Boolean,
  tags: [
    {
      name: String,
      color: String
    }
  ],
  businessUnit: {
    name: String,
    color: String
  },
  currentStatus: {
    name: String,
    date: Date,
    color: String
  },
  statuses: [
    {
      name: String,
      date: Date,
      color: String
    }
  ],
  lastUpdated: Date,
  client: Boolean,
  supplier: Boolean,
  assignedTo: String
})

const Contract = mongoose.model('contract', ContractSchema)

const UserSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String,
  masterEntityID: String,
  isLawyer: Boolean,
  isAdmin: Boolean
})

const User = mongoose.model('user', UserSchema)

const MasterEntitySchema = mongoose.Schema({
  name: String,
  businessUnits: [
    {
      name: String,
      color: String
    }
  ],
  statuses: [
    {
      name: String,
      date: Date,
      color: String
    }
  ],
  tags: [{ name: String, color: String }],
  lawyers: Array,
  relatedEntities: Array
})

const MasterEntity = mongoose.model('masterEntity', MasterEntitySchema)

export { Contract, User, MasterEntity }
/*
User.find().exec((err, ents) => {
  if (err) console.log(err)
  ents.forEach(c => {
    c.remove()
  })
})
/*
const contracts = generator(100)

contracts.forEach(c => {
  new Contract(c).save((err, res) => {
    if (err) console.log(err)
  })
})
*/
