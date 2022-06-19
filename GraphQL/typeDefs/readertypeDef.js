const {gql} = require('apollo-server-express')
console.log('what scnx')

const readerTypeDef = gql`
    type Reader {
        _id: String,
        Name: String!,
        Email: String!
        Admin:Boolean!
        createdAt:String!
    },

    type Query {
        getAllReaders: [Reader]!
        getReaderById(id:String): Reader!
    },

    type Mutation {
       addReader(Name:String,Email:String,Admin:Boolean):Reader!
       AddAdmin:[Reader]!
    }
`

module.exports = readerTypeDef