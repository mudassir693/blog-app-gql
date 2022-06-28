const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    ReaderId:{
        type:String
    },
    BlogId:{
        type:String
    },
    Content:{
        type: String,
    },
    PublishDate:{
        type: Date,
        default: new Date().toDateString()
    }
})

module.exports = mongoose.model('comments',schema)