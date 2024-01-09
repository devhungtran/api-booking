const { orderModel } = require("../models/order.model");
const Product = require('../models/product.model');



const createOrder = async(req,res) =>{
    try {
        const {fullname,number_phone,address, product} = req.body
        

        const zaloID = req.zaloID;




        if(!check){
            res.status(401).status({
                status: true,
                message: "product not existed !!!",
     
            })
        }

        const new_order = await orderModel.create({
            order_user: zaloID,
            order_fullname: fullname,
            address: address,
            product_code: product
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