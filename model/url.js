const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl : {
        type : String, 
        required : true,
        unique : true
    },
    redirectUrl : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    visitedHistory : {
        type : Number
    }
}, {timestamps : true});

const URLs = mongoose.model('url', urlSchema);

module.exports = URLs;