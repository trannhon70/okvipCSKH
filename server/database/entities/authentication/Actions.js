require('../../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let actionSchema = new Schema({
    actionName: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('Actions', actionSchema)
