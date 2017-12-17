import Fuse from 'fuse.js'
import { setTimeout } from 'timers'

function search (list, value, options) {
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
