const dotenv = require('dotenv');
dotenv.config()
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./GraphQL/typeDefs/blogtypeDef')
const resolvers = require('./GraphQL/resolvers/blogResolver')

const express = require('express')

const connectDB = require('./config/DB_Config')


const app = express()


// db connection settings
connectDB()

const server = new ApolloServer(
    { typeDefs, resolvers}
)
    
server.applyMiddleware({app})
    
// routes

app.get('/',async(req,res)=>{
    try {
        return res.status(200).json({data:'PrgressDaily api running',error:false})
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:error,error:true})
    }
})

app.listen(5000,()=>{
    console.log(`server is running`)
})