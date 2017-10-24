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
  supplier: Boolean
})

const Contract = mongoose.model('contracts', ContractSchema)

export { Contract }

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
