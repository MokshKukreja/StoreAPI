const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provides']
    },
    price:{
        type:Number,
        required:[true,'product price must be provides']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    comapny:{
        type:String,
        enum:{
            values:["marcos","liddy"],
            message:"{VALUE} is not supported"
        }
        // enum:["ikea","liddy"]

    }
})


module.exports = mongoose.model('Product',productSchema)