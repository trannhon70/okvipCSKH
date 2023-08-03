require('../../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: 'unknown'
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    role: { type: Schema.Types.ObjectId, ref: 'Roles' },
    activeStatus: {
        type: Number
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: {
        type: Date
    }
}, {versionKey: false});

module.exports = mongoose.model('Users', userSchema)
