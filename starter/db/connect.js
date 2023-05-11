const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true // <-- no longer necessary
  })
}

module.exports = connectDB