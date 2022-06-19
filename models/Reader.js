const mongoose = require('mongoose')

const readerSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Admin:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})

module.exports = mongoose.model('readers',readerSchema)