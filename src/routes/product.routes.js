const express = require('express')
const { getAllProducts, createProduct, editProduct,deleteProduct } = require('../controllers/Product.controller')

const   productRoutes  = express.Router()

productRoutes.get('/get', getAllProducts)
productRoutes.post('/create', createProduct);
productRoutes.put('/put', editProduct);
productRoutes.delete('/delete', deleteProduct);



module.exports = {
    productRoutes
}