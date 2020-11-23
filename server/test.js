var mongoose = require('mongoose')
var dotenv = require('dotenv')
// import timestamps from 'mongoose-timestamp'
dotenv.config({ path: '../../.env' })

console.log(process.env.MONGODB_CONNECTION_STRING)

try {
  mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (error) {
  console.log(error)
}

const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))
