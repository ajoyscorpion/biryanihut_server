const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB Atlas connected Successfully");
}).catch((error)=>{
    console.log("Error:",error);
})