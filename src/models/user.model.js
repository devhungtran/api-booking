const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    zaloId: String,
    followerId: String,
    birthday: Date,
    name: String,
    gender: String,
    point: {
        type: Number,
        default: 0
    },
    avatar: String,
    status: { type: Number, default: 0 },
    last_date: {type: Date, default: Date.now}
});

const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel };