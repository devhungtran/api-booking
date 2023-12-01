const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    zaloId: String,
    followerId: String,
    birthday: Date,
    name: String,
    gender: String,
    avatar: String,
    status: { type: Number, default: 0 },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel };