// import mongoose
const mongoose = require('mongoose')

// define schema to store data in collection
const biryanisSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

// create a model for collection
const biryanis = mongoose.model('biryanis',biryanisSchema)

//export model
module.exports = biryanis