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
    TerminalCommands:{
        type:Array
    },
    Code:{
        type:Array
    },
    Peragraphs:{
        type:Array
    },
    FinalLine:{
        type:String
    },
    Views:{
        type:Number
    },
    Likes:{
        type:Number
    }
},{
    timestamps:true
})

module.exports = mongoose.model('blogs',blogSchema)