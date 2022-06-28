const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb+srv://mudassir456:mudassir456@cluster0.bi8q1.mongodb.net/ProgressDaily-dev?retryWrites=true&w=majority")
        console.log('db connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB