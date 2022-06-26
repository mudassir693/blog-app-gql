const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    TitleImage:{
        type:String
    },
    Title:{
        type:String
    },
    Introduction:{
        type:String
    },
    Body: Array,
    FinalLine:{
        type:String
    },
    Views:{
        type:Number
    },
    Likes:{
        type:Number
    },
    LikeBy:{
        type:Array
    }

},{
    timestamps:true
})

module.exports = mongoose.model('blogs',blogSchema)