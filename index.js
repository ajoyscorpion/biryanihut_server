require("dotenv").config()
const express =require('express')
const cors = require('cors')
const router = require("./routes/router")
require('./db/connection')

//express server
const server = express()

//use package to server
server.use(cors())
server.use(express.json())
server.use(router)

//create port where server should listen
const PORT = process.env.PORT || 3000

// run server
server.listen(PORT,()=>{
    console.log(`Biryani-Hut server started at port : ${PORT}`);
})

// resolve get req to localhost:3000
server.get('/',(req,res)=>{
    res.status(200).json("Biryani-Hut Server Started !!!")
})