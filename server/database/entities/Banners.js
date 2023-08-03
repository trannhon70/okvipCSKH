require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let bannerSchema = new Schema({
    img: {
        type: String,
    },
    slug: {
        type: String,
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

module.exports = mongoose.model('Banners', bannerSchema)
