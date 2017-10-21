import mongoose from 'mongoose'

export async function db (connection) {
  let mongo
  if (!mongo) {
    mongo = mongoose.connect(connection)
  }
  return mongo
}
