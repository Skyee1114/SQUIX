const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({    
    email: {
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