const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'promotor'], 
        default: 'user', 
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("Users", userSchema)
module.exports = User;
