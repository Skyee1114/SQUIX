const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscriber: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = Subscriber = mongoose.model('subscriber', SubscriberSchema);