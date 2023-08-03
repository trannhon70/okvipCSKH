require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let domainSchema = new Schema({
    domain: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
    },
    logo: {
        type: String,
    },
    icon : {
        type: String,
    },
    backgroud: {
        type: String,
    },
    backgroudUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    expected: {
        type: String,
    },
    borderRadius:{
        type: Number
    },
    backgroundColor : {
        type: String
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

module.exports = mongoose.model('Domains', domainSchema)
