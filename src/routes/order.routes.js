const express = require('express')
const { createOrder } = require('../controllers/order.controller')

const  orderRoutes  = express.Router()



orderRoutes.post("/", createOrder)



module.exports = {
    orderRoutes
}