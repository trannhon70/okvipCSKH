
require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let logoSchema = new Schema({
    logo: {
        type: String
    },
    logo1: {
        type: String
    },
    title: {
        type: String
    },
    content: {
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

module.exports = mongoose.model('Logos', logoSchema)
