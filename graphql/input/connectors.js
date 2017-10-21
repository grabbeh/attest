import mongoose from 'mongoose'
const db = require('../../config/db.js')
// import generator from '../../data/compiled/data'
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
/*
const contracts = generator(10)

contracts.forEach(c => {
  new Contract(c).save((err, save) => {
    if (err) console.log(err)
    console.log('Saved')
  })
})

Contract.find().exec((err, contracts) => {
  console.log(contracts.length)
}) */
