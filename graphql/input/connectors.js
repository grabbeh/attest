import mongoose from 'mongoose'
import generator from '../../data/compiled/data'
mongoose.Promise = require('bluebird')

const db = require('../../config/db.js')
// mongoose.connect(db, { useMongoClient: true })
mongoose.connect(db)

const lawyers = [
  { firstName: 'Atticus', lastName: 'Finch', id: 1 },
  { firstName: 'Ally', lastName: 'McBeal', id: 2 },
  { firstName: 'Horace', lastName: 'Rumpole', id: 3 }
]

const ContractSchema = mongoose.Schema({
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

const LawyerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  id: Number
})

const Lawyer = mongoose.model('lawyer', LawyerSchema)

export { Contract, Lawyer }

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

Contract.find().exec((err, contracts) => {
  if (err) console.log(err)
  console.log(contracts.length)
}) */

const contracts = generator(100)

contracts.forEach(c => {
  new Contract(c).save((err, res) => {
    if (err) console.log(err)
  })
})
