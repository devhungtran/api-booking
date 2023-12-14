



const mongoose = require('mongoose');
const Schema = mongoose.Schema

const notificationSchema  = new  Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    created_date: { 
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        default: Date.now
    }
})
const NotificationModel = mongoose.model('notification', notificationSchema);



module.exports = { 
  NotificationModel 
};
