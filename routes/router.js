// import express
const express = require("express")

// import table Controller
const tableController = require("../controllers/tableController")

// import biryanis Controller
const biryanisController = require("../controllers/biryanisController")

//import orders controller
const ordersController = require("../controllers/ordersController")

//import user controller
const userController = require("../controllers/userController")

// import router from express 
const router = new express.Router()

// router to get tables
router.get("/tables",tableController.getTables)

// router to get biryanis to order page
router.get("/biryanis",biryanisController.getBiryanis)

//router to add orders
router.post('/orders/:tableid',tableController.addOrders)

//router to get orders
router.get("/getOrders/:tableid",tableController.getOrders)

//router to increment order
//router.post("/increOrder",tableController.incrementOrder)

//router to decrement order
router.post("/decreOrder/:tableid",tableController.decrementOrder)

// router to empty orders
router.delete("/emptyOrders/:tableid",tableController.emptyOrders)

// router to addBill
router.post("/bill/:tableid",tableController.addBill)

// router to getBills
router.get("/getBills",tableController.getBills)

// router to signin
router.post("/login",userController.login)

// export router
module.exports = router