const {gql} = require('apollo-server-express')

const typeDef = gql`
    
    type Comment {
        _id: String,
        BlogId:String
        ReaderId: String,
        Content: String,
        PublishDate: String,
    },

    type Query {
        getAllComents: [Comment],
        getCommentById(id:String):Comment
    },
    type Mutation {
        addComment(BlogId: String, ReaderId:String, Content:String): Comment
    }
`

module.exports = typeDef