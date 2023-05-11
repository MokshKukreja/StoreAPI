require('dotenv').config()
require('express-async-errors')

const express =require("express")

const app = express();

const connectDB = require("./db/connect")
const productRouter = require("./routes/products")
// require("./db/connect")

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>')
})


app.use("/api/v1/products",productRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        // connectDB
        await connectDB("mongodb+srv://mokshkukreja999:moksh.1234@cluster0.frzozja.mongodb.net/Store-API?retryWrites=true&w=majority")
        app.listen(port,console.log(`Server is running port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()