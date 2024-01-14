// import table collection from model
const tables = require('../models/tableSchema')

// logic to get the tables
exports.getTables = async (req,res)=>{
    try{
        const allTables = await tables.find()
        res.status(200).json(allTables)
    } catch(error){
        res.status(400).json(error)
    }  
}

// logic to add orders
exports.addOrders = async (req,res) => {
    const {tableid} = req.params
    const {id,name,price,quantity,total} = req.body
    try{
        const table = await tables.findOne({tableid})
        console.log(table);
        const existingItem = table.orders.find((item)=>item.id === id)
        console.log(existingItem);
        if (existingItem) {
            existingItem.quantity +=1
            existingItem.total = existingItem.quantity * existingItem.price
            await table.save()
            res.status(200).json("Items added Successfully")
        }else{
            const newItem = {
                id,
                name,
                price,
                quantity,
                total:price
            }
            console.log(newItem);
            table.orders.push(newItem)
            console.log(table.orders);
            await table.save(newItem)
            res.status(200).json("Item added Successfully")
        }
    }catch(error){
        res.status(400).json(error)
    }
}

//logic to get cart
exports.getOrders = async (req,res) => {
    const {tableid} = req.params
    console.log(tableid);
    try{
        const table = await tables.findOne({tableid})
        console.log(table);
        const allOrders = table.orders
        console.log(allOrders);
        res.status(200).json(allOrders)
    }catch(error){
        res.status(400).json(error)
    }
}

// increment order
// exports.incrementOrder = async(req,res) => {
//     const {tableid,id} = req.body
//     console.log(tableid);
//     try{
//         console.log(id);
//         const table = await tables.findOne({tableid})
//         console.log(table);
//         const increOrder = table.orders.find((item)=> item.id === id)
//         console.log(increOrder);
//         if(increOrder){
//             increOrder.quantity+=1
//             increOrder.total=increOrder.quantity*increOrder.price
//             await table.save()
//             res.status(200).json("Incremented Successfully")
//         }else{
//             return res.status(404).json({ error: "Item not found in the cart" });
//         }

//     }catch(error){
//         res.status(403).json(error)
//     }
// }

// decrement order
exports.decrementOrder = async(req,res)=>{
    const {tableid} = req.params
    const {id}= req.body
    console.log(tableid);
    try{
        console.log(id);
        const table = await tables.findOne({tableid})
        console.log(table);
        const decreOrder = table.orders.find((item)=>item.id === id)
        if(decreOrder){
            decreOrder.quantity-=1
            if(decreOrder.quantity===0){
                console.log("hey fuck");
                table.orders = table.orders.filter((item)=>item.id!==id)
                await table.save()
                console.log("done and dusted");
                res.status(200).json("Cart is Empty")
            }else{
                decreOrder.total = decreOrder.quantity*decreOrder.price
                await table.save()
                res.status(200).json("Item decremented")
            }
        }else{
            res.status(404).json("Item not found")
        }
    }catch(error){
        res.status(403).json(error)
    }
}

//empty order
exports.emptyOrders = async(req,res)=>{
    const {tableid} = req.params
    console.log(tableid);
    try{
        const table = await tables.findOne({tableid})
        console.log(table);
        console.log(table.orders);
        table.orders = []
        await table.save()
        res.status(200).json("Cart is Cleared")
    }catch(error){
        res.status(403).json(error)
    }
}

//add Bill
exports.addBill = async (req, res) => {
    try {
      const { tableid } = req.params;
      const { customerNo, date, totalCartAmount, items} = req.body;
  
      const table = await tables.findOne({ tableid });
  
      table.bills.push({ customerNo, date, totalCartAmount, items });
  
      await table.save();
  
      res.status(200).json({ success: true, message: 'Bill added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// get Bills
exports.getBills = async (req,res) => {
    try{
        const allTables = await tables.find()
        console.log(allTables);
        res.status(200).json(allTables)
    } catch(error){
        res.status(400).json(error)
    } 
}








// exports.addBill = async(req,res) => {
//     const {tableid} = req.params
//     console.log(tableid);
//     try{
//         const table = await tables.findOne({tableid})
//         console.log(tableid);
//         const billsToAdd = req.body
//         console.log(billsToAdd);
//         table.bills.push(...billsToAdd);
//         // billsToAdd.forEach((billData)=>{
//         //     const { date, id, name, price, quantity, total } = billData;
//         //     const bill = {
//         //         date,
//         //         id,
//         //         name,
//         //         price,
//         //         quantity,
//         //         total 
//         //     }
//         //     table.bills.push(bill)
//         // })
//         // const { date, id, name, price, quantity, total } = billData;
//         // const bill = {
//         //     date,
//         //     id,
//         //     name,
//         //     price,
//         //     quantity,
//         //     total 
//         // }
//         // table.bills.push(bill)
//         await table.save() 
//         res.status(200).json("Bill added successfully")
//     }catch(error){
//         console.log(error);
//         res.status(400).json(error)
//     }
// }


// {
//     coustomerBill:101,
//     date:"",
//     orders:[
//         {
//             "id":2,
//             "name":"Beef Biryani",
//             "price":160,
//             "quantity":2,
//             "total":320
//         },
//         {
//            "id":2,
//             "name":"Chicken Biryani",
//             "price":180,
//             "quantity":2,
//             "total":360 
//         }
//     ]
// }