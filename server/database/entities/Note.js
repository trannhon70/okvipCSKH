
require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let noteSchema = new Schema({
    title: {
        type: String
    },
    icon: {
        type: String
    },
    description: {
        type: String,
    },
    borderRadius:{
        type: Number
    },
    backgroundColor : {
        type: String
    },
    color : {
        type: String
    },
    domain: {
        type: Schema.Types.ObjectId,
        ref: 'Domains',
    },
    order1: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('Notes', noteSchema)
