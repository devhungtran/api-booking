const { orderModel } = require("../models/order.model");
const Product = require('../models/product.model');



const createOrder = async(req,res) =>{
    try {
        const {product_id} = req.body
        
        if(!product_id){
            res.status(401).status({
                status: true,
                message: "product_id not existed !!!",
             
            })
        }
        const zaloID = req.zaloID;


        const check = await Product.findOne({
            product_id: product_id
        })
        if(!check){
            res.status(401).status({
                status: true,
                message: "product not existed !!!",
     
            })
        }

        const new_order = await orderModel.create({
            order_user: zaloID,
            product_code: product_id
        })

        if(new_order){
            res.status(200).status({
                status: true,
                message: "order successfully !!!",
                data: new_order
            })
        }

    } catch (error) {
        res.status(500).status({
            status: true,
            message: "order failed !!!",
  
        })
    }
}


module.exports = {
    createOrder
}