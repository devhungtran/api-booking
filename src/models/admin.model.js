

const mongose = require('mongoose')


const Schema = mongose.Schema

const AdminSchema = new Schema({

    username: {
        type: String,
        require: true
    },
    fullname:{
        type: String,
        require: true
    },
    email: {
        type:  String,
        require: true
    },
    number_phone:{
        type:String,
        default: "0333433969"
    },
    password: {
        type: String,
        require: true,
    },
    isAcctive:{
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: "/uploads/img/avt.png"
    },
    role: {
        type: String,
        default: "staff"
    },
    balance: {
        type: Number,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }

}, {collection: "users"})


const AdminModel = mongose.model('admin', AdminSchema)


module.exports = {AdminModel}