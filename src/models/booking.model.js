

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema  = new Schema({
    booking_code: {
        type: String,
        required: true
    },
    booking_user: {
        type: String,
        required: true
    },
    branch_code: {
        type: String,
        required: true
    },
    code_service: {
        type: Array
    },
    
    booking_time: {
        type: Date,
        required: true
    },
    booking_status:{
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

const bookingModel = mongoose.model('booking', BookingSchema);



module.exports = { 
    bookingModel 
};
