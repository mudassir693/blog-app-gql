const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.db_uri)
        console.log('db connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB