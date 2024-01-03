const express = require('express');

const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({
            status: true,
            Message: "Lấy tất cả sản phẩm thành công",
            data: products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            Message: "Lỗi khi lấy sản phẩm",
            error: error.message
        });
    }
}


const findProductByID = async(req,res) =>{
    try {
        const product_id = req.params.product_id || req.body.product_id 


        if(!product_id){
            res.status(500).json({
                status: false,
                message: "Mã lịch không tồn tại",
            })
            return
        }

        const data = await Product.findOne({
            product_id: product_id
        })

        if(!data){
            res.status(500).json({
                status: false,
                message: "failed!!!",
            })
            return
        }
       
        return res.status(200).json({
            status: true,
            message: `get booking by  booking code ${product_id} successfully`,
            data: data
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: "failed!!!",
        })
    }
}

const addProduct = async (req,res) =>{
    try {
        

        const {product_id, product_name, product_img,brand,description ,product_amount,price} = req.body  

        const newProduct = await Product.create({
            product_id: product_id,
            product_name: product_name,
            product_img: product_img,
            brand: brand,
            description: description,
            product_amount: product_amount,
            price: price,
            isSale: true,
            discountPercentage: 20
        })

        console.log(product_id);
        res.status(200).json({
            message: "true"
        })




    } catch (error) {
        
    }
}


    
module.exports = {
    getAllProducts,addProduct,findProductByID
}
