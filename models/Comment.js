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
        type: String,
        default: new Date()
    }
})

module.exports = mongoose.model('comments',schema)