//import orders collection from models
const orders = require('../models/orderSchema')

// logic to post to orders
exports.addOrders = async (req,res)=>{
    // get order details from req to add
    const {tableid,id,name,price,quantity} = req.body
    console.log(req.body);
    try{
        console.log("1");
        const existingOrder = await orders.findOne({ tableid, name });
        console.log(existingOrder);
        if(existingOrder){
            existingOrder.quantity+=1
            await existingOrder.save()
            res.status(200).json("orders added successfully")
        }
        else{
        const newOrder = new orders({tableid,id,name,price,quantity})
        console.log("hey");
        console.log(newOrder);
        await newOrder.save()
        console.log("2");
        res.status(200).json("order added successfully")
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}


