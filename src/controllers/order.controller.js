const { orderModel } = require("../models/order.model");
const Product = require('../models/product.model');



const findOrderByID = async (req, res) => {
    try {
        const zaloID = req.zaloID;

        const data = await orderModel.find({
            order_user: zaloID
        });


        
        if (data && data.length > 0) {
            res.status(200).json({
                status: true,
                message: "Get orders created!",
                data: data
            });
        } else {
            res.status(404).json({
                status: false,
                message: "No orders found for the specified user."
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
};



const createOrder = async (req, res) => {
    try {
        const { fullname, number_phone, address, product } = req.body;
        const zaloID = req.zaloID;

        const new_order = await orderModel.create({
            order_user: zaloID,
            order_fullname: fullname,
            numberphone: number_phone,
            address: address,
            product_code: product
        });

        if(new_order) {
            res.status(200).json({
                status: true,
                message: "Order successfully created!",
                data: new_order
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createOrder,findOrderByID
};
