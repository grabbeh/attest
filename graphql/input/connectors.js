import mongoose from 'mongoose'
import generator from '../../data/compiled/data'
mongoose.Promise = require('bluebird')

const db = require('../../config/db.js')
mongoose.connect(db, { useMongoClient: true })
/*
const lawyers = [
  { firstName: 'Atticus', lastName: 'Finch', id: 1 },
  { firstName: 'Ally', lastName: 'McBeal', id: 2 },
  { firstName: 'Horace', lastName: 'Rumpole', id: 3 }
]
*/
const statuses = [
  { name: 'Instructed' },
  { name: 'Drafted' },
  { name: 'Approved' },
  { name: 'Executed' }
]

const tags = [
  { name: 'Critical' },
  { name: 'Renewal' },
  { name: 'High priority' },
  { name: 'Strategic' }
]

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

export { Contract, Lawyer, Status, Tag }

// delete existing contracts
/*
Lawyer.find().exec((err, lawyers) => {
  lawyers.forEach(l => {
    l.remove()
  })
})

lawyers.forEach(l => {
  new Lawyer(l).save((err, res) => {
    if (err) console.log(err)
  })
})

Status.find().exec((err, statuses) => {
  statuses.forEach(l => {
    l.remove()
  })
})

statuses.forEach(s => {
  new Status(s).save((err, res) => {
    if (err) console.log(err)
  })
})

Tag.find().exec((err, statuses) => {
  statuses.forEach(l => {
    l.remove()
  })
})

tags.forEach(s => {
  new Tag(s).save((err, res) => {
    if (err) console.log(err)
  })
})

Contract.find().exec((err, contracts) => {
  if (err) console.log(err)
  contracts.forEach(c => {
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
