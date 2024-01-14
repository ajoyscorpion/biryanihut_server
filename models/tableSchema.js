// import mongoose
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    total: {
        type:Number,
        required:true
    }
})

const billSchema = mongoose.Schema({
    customerNo:{
        type:Number,
        required:false,
    },
    date:{
        type: Date,
        default: Date.now,
        required: true,
    },
    totalCartAmount:{
        type:Number,
        required:false
    },
    items:[orderSchema],
})

// define schema to store data in collection
const tabelSchema = mongoose.Schema({
    tableid:{
        type:Number,
        required:true
    },
    tablename:{
        type:String,
        required:true
    },
    orders:[orderSchema],
    bills:[billSchema]
});

// create a model for collection
const tables = mongoose.model("tables",tabelSchema)

//export model
module.exports = tables