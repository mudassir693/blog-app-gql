const {gql} = require('apollo-server-express')

console.log('this is block typeDefs')

const typeDefs = gql`
    type Block {
        _id: String
        Type: String,
        Position: String,
        Content: String
    }

    #Query
    type Query {
        getAllBlocks: [Block],
        getBlockById(id:String): Block
    }
    type Mutation {
        addBlock(Type:String, Position: String, Content: String): Block,
        updBlock(id: String, Type:String, Position: String, Content: String): Block,
        deleteBlock(id: String): Block
    }

`

module.exports = typeDefs