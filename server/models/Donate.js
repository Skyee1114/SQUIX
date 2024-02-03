const mongoose = require('mongoose');

const DonateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    amount: {
        type: Number,
        required: true,
    },   
    date: {
        type: Date,
        required: true,
    },   
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

});

module.exports = Donate = mongoose.model('donate', DonateSchema);