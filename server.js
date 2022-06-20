const dotenv = require('dotenv');
dotenv.config()
const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./GraphQL/typeDefs/index')
const resolvers = require('./GraphQL/resolvers/index')

const express = require('express')

const connectDB = require('./config/DB_Config')


const app = express()




// db connection settings
// const schema = makeExecutableSchema({ typeDefs, resolvers });
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

const port = process.env.PORT

console.log('this is port: ',port);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})