const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    titles: {
        english: {
            type: String,
            required: true,
        },
        russian: {
            type: String,            
        },
        korean: {
            type: String,       
        },
        portuguese: {
            type: String,
        },
        spanish: {
            type: String,
        },
    },
    contents: {
        english: {
            type: String,
            required: true,
        },
        russian: {
            type: String,
        },
        korean: {
            type: String,
        },
        portuguese: {
            type: String,
        },
        spanish: {
            type: String,
        },        
    },
    tags: {
        english: [
            { type: String }
        ],
        russian: [
            { type: String }
        ],
        korean: [
            { type: String }
        ],
        portuguese: [
            { type: String }
        ],
        spanish: [
            { type: String }
        ],
    },
    image: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        default: "",
    },  
    subscription: {
        type: Boolean,
        default: false,
    },
});

module.exports = News = mongoose.model('news', NewsSchema);
