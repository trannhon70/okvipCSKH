
require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let postSchema = new Schema({
    
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    status: {
        type: Number
    },
    domain: {
        type: Schema.Types.ObjectId,
        ref: 'Domains',
    },
   
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: {
        type: Date
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {versionKey: false});

module.exports = mongoose.model('Posts', postSchema)
