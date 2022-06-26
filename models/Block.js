const mongoose  = require('mongoose')

const blockSchema = new mongoose.Schema({
    Type :{
        type:String
    },
    Position: String,
    Content: String
},{
    timestamps:true
}) 

module.exports = mongoose.model('blocks',blockSchema)