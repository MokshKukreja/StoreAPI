
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./model/product')

const jsonProducts = require('./product.json')

const start = async () => {
  try {
    await connectDB("mongodb+srv://mokshkukreja999:moksh.1234@cluster0.frzozja.mongodb.net/Store-API?retryWrites=true&w=majority")
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()