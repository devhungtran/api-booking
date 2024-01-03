


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderShcheme  = new Schema({

    order_user: {
        type: String,
        require: true
    },
    product_code: {
        type: Array
    },
    
    order_time: {
        type: Date,
        default: Date.now()
        },
    order_status:{
        type: String,
        default: "waiting"
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model('order', OrderShcheme);



module.exports = { 
    orderModel 
};
    