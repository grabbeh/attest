import Chance from 'chance'
import moment from 'moment'
const chance = new Chance()

const internal = [
  'ACME Inc',
  'ACME DYNAMITE Inc',
  'ACME LUBRICANT Inc',
  'ACME DRILLING Inc'
]

const external = [
  'Oracle, Inc',
  'Google, Inc',
  'Apple, Inc',
  'Facebook, Inc',
  'Amazon Inc',
  'JP Morgan'
]

const businessUnits = [
  'Sales',
  'IT',
  'Disaster recovery',
  'Incident management',
  'Facilities',
  'Legal',
  'Finance',
  'Customer services',
  'Marketing',
  'Software development'
]

const statuses = ['Instructed', 'Executed', 'Drafted']

const randomTags = ['High priority', 'renewal', 'Critical', 'Strategic']

const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const number = arr => {
  return Math.floor(Math.random() * arr.length)
}

const metaDataGenerator = () => {
  const date = new Date()
  const client = chance.bool()
  const supplier = !client
  const internalParties = random(internal)
  const externalParties = random(external)
  const status = random(statuses)
  const id = chance.guid()
  const tags = randomTags.slice(number(randomTags), number(randomTags))
  const businessUnit = random(businessUnits)
  let effectiveDate = chance.date({
    year: chance.year({ min: 1990, max: date.getFullYear() }),
    string: true,
    american: false
  })

  effectiveDate = new Date(moment(effectiveDate, 'DD-MM-YYYY')).toISOString()

  const executionDate = effectiveDate

  let expiryDate = chance.date({
    year: chance.year({ min: date.getFullYear(), max: 2025 }),
    string: true,
    american: false
  })

  expiryDate = new Date(moment(expiryDate, 'DD-MM-YYYY')).toISOString()
  const rollingTerm = chance.bool()

  const metaData = {
    internalParties,
    externalParties,
    id,
    effectiveDate,
    executionDate,
    expiryDate,
    rollingTerm,
    client,
    supplier,
    businessUnit,
    tags,
    status
  }
  return metaData
}

const contractsGenerator = num => {
  const contractsData = []
  if (num) {
    while (num > 0) {
      contractsData.push(metaDataGenerator())
      num--
    }
  } else {
    contractsData.push(metaDataGenerator())
  }
  return contractsData
}

export default contractsGenerator
