
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let SetingSchema = new Schema ({
    app_name : {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    facebook_url: {
        type: String,
        require: true
    },
    email_contact: {
        type: String,
        require: true
    },
    phone_contact: {
        type: String,
        require: true
    },
    created_date: { 
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }


}, {collection: 'setting'})

const SettingModel = mongoose.model('setting', SetingSchema);


module.exports = { 
  SettingModel 
};
