


const mongoose = require('mongoose');
const Schema = mongoose.Schema

const branchSchema  = new   Schema({
    branch_code: {
        type: String,
        require: true
    },
    branch_name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    inProvine: {
        type: String,
        require: true
    },
    location: {
        type: String,
        
    },
    created_date: { 
        type: Date,
        default: Date.now
    },
})
const branchModel = mongoose.model('branch', branchSchema);



module.exports = { 
  branchModel 
};
