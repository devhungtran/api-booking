const express = require('express')
const { getAllProducts, findProductByID, } = require('../controllers/product.controller')

const   productRoutes  = express.Router()

productRoutes.get('/', getAllProducts)
productRoutes.get('/:product_id', findProductByID)




module.exports = {
    productRoutes
}