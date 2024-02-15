const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
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
    division: {
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
    position: {
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
    date: {
        type: Date,
        default: "",
    },  
});

module.exports = Job = mongoose.model('job', JobSchema);