import Fuse from 'fuse.js'

function search (list, value) {
  const options = {
    keys: [
      'ownerEntity',
      'lawyerName',
      'currentStatus',
      'businessUnit',
      'tags',
      'internalParties',
      'externalParties',
      'statuses.status',
      'assignedTo.name',
      'assignedTo.email'
    ]
  }
  if (!value || value.length < 3) {
    return list
  }

  const fuse = new Fuse(list, {
    threshold: 0.4,
    ...options
  })

  return fuse.search(value.trim())
}

export default search
