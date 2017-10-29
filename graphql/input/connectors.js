import mongoose from 'mongoose'

import generator from '../../data/compiled/data'
const db = require('../../config/db.js')
mongoose.connect(db)

const ContractSchema = mongoose.Schema({
  internalParties: Array,
  externalParties: Array,
  executionDate: Date,
  effectiveDate: Date,
  expiryDate: Date,
  rollingTerm: Boolean,
  tags: Array,
  businessUnit: String,
  status: String,
  createdAt: Date,
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

Contract.find().exec((err, contracts) => {
  contracts.forEach(c => {
    c.remove()
  })
})

const contracts = generator(50)

contracts.forEach(c => {
  new Contract(c).save((err, res) => {
    if (err) console.log(err)
  })
})

const lawyers = [
  { firstName: 'Atticus', lastName: 'Finch', id: 1 },
  { firstName: 'Horace', lastName: 'Rumpole', id: 2 },
  { firstName: 'Ally', lastName: 'McBeal', id: 3 },
  { firstName: 'Elle', lastName: 'Woods', id: 4 },
  { firstName: 'Sam', lastName: 'Seaborn', id: 5 }
]

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
