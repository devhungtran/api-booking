

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema  = new Schema({
    booking_code: {
        type: String,
        require: true
    },
    booking_user: {
        type: String,
        require: true
    },
    branch_code: {
        type: String,
        require: true
    },
    code_service: {
        type: String,
        require: true
    },
    booking_time: {
        type: Date,
        require: true
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
