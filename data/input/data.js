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

const baseStatuses = ['Instructed', 'Approved', 'Drafted', 'Executed']
const randomTags = ['High priority', 'Renewal', 'Critical', 'Strategic']

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
  const currentStatus = random(baseStatuses)
  const id = chance.guid()
  const tags = randomTags.slice(number(randomTags), number(randomTags) + 1)
  const businessUnit = random(businessUnits)
  const assignedTo = random([1, 2, 3, 4, 5])

  let createdAt = chance.date({
    year: chance.year({ min: 1990, max: date.getFullYear() }),
    string: true,
    american: false
  })
  const expiryDate = expiryDateGenerator(currentStatus)
  console.log(expiryDate)
  const rollingTerm = chance.bool()
  const ownerEntity = 'ACME Inc'
  const statuses = statusGenerator(createdAt, currentStatus)

  const metaData = {
    ownerEntity,
    internalParties,
    externalParties,
    id,
    expiryDate,
    rollingTerm,
    client,
    supplier,
    businessUnit,
    tags,
    currentStatus,
    statuses,
    assignedTo
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

const expiryDateGenerator = currentStatus => {
  const date = new Date()
  if (currentStatus === 'Executed') {
    let expiryDate = chance.date({
      year: chance.year({ min: date.getFullYear(), max: 2025 }),
      string: true,
      american: false
    })
    return (expiryDate = new Date(
      moment(expiryDate, 'DD-MM-YYYY')
    ).toISOString())
  } else return null
}

const statusGenerator = (createdDate, currentStatus) => {
  let position = baseStatuses.indexOf(currentStatus)
  // Don't include initial status because that will always be present and we need to allocate base date
  let priorExceptInstructed = baseStatuses.slice(1, position + 1)

  let firstStatus = {
    status: 'Instructed',
    date: new Date(moment(createdDate, 'DD-MM-YYYY')).toISOString()
  }
  let subsequentStatuses = priorExceptInstructed.map((p, i) => {
    return {
      status: p,
      date: new Date(
        moment(createdDate, 'DD-MM-YYYY').add(i, 'M')
      ).toISOString()
    }
  })
  let full = [firstStatus, ...subsequentStatuses]
  return full
}

export default contractsGenerator
