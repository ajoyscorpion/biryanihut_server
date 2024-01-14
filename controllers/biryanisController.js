// import biryanis from model
const biryanis = require("../models/biryanisSchema")

//logic to get the biryanis
exports.getBiryanis = async (req,res) =>{
    try{
        const allBiryanis = await biryanis.find()
        res.status(200).json(allBiryanis)
    }
    catch(error){
        res.status(400).json(error)
    }
}