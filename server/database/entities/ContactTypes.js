require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let contactTypeSchema = new Schema({
    domain: {
        type: Schema.Types.ObjectId,
        ref: 'Domains',
    },
    order1: {
        type: Number,
        default: 0
    },
    contactType: [
        {
            title: {
                type: String,
            },
            img: {
                type: String,
            },
            color: {
                type: String,
            },
            slug: {
                type: String,
            },
            order: {
                type: Number,
                default: 0
            },
           
            description: {
                type: String,
            }, 
            content: {
                type: String,
            },
           
            backgroundColor: {
                type: String,
            },
            borderRadius: {
                type: Number,
            },
        }
    ],
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

contactTypeSchema.index({'title': 'text'});

module.exports = mongoose.model('ContactTypes', contactTypeSchema)
