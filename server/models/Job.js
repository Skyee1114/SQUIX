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
        spanish: {
            type: String,
        },
        portuguese: {
            type: String,
        },        
    },
    summary: {
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
        spanish: {
            type: String,
        },
        portuguese: {
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
        spanish: {
            type: String,
        },  
        portuguese: {
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
        spanish: {
            type: String,
        },   
        portuguese: {
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
        spanish: {
            type: String,
        },
        portuguese: {
            type: String,
        },        
    },
    date: {
        type: Date,
        default: "",
    },  
});

module.exports = Job = mongoose.model('job', JobSchema);
