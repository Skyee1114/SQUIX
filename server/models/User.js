const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isverified: {
        type: Boolean,
        required: true,        
    },
    googleId: {
        type: String
    },    
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

module.exports = User = mongoose.model('user', UserSchema);