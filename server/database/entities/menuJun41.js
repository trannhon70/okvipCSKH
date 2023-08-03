
require('../database');
const mongoose = require('mongoose');

const { Schema } = mongoose;

let menuJun41Schema = new Schema({
    
    titleLink: {
        type: String
    },
    backgroundColor:{
        type: String
    },
    borderRadius:{
        type: String
    },
    color:{
        type: String
    },
    order1 : {type: Number},
    city:[
        {
            order:{type: Number},
            backgroundColor: {type: String},
            borderRadius: {type: String},
            color: {type: String},
            title: {type: String},
            slug: {type: String},
        },
    ],
    titleIntroduce:{
        type: String
    },
    descriptionIntroduce:{
        type: String
    },
    imageIntroduce : [
        {
            order: {type: Number},
            img: {type: String},
            slug: {type: String},
        }
    ],
    titleNew:{type: String},
    titleCustormor :{type: String},
    custormor: [
        {
            order: {type: Number},
            title:{type: String},
            borderRadius:{type: String},
            backgroundColor:{type: String},
            color:{type: String},
            slug:{type: String},
        }
    ],
    titleQA:{type: String},
    contentQA:{type: String},
    descriptionQA:{type: String},
    titleNT:{type: String},
    titleRT:{type: String},
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

module.exports = mongoose.model('MenuJun41s', menuJun41Schema)
