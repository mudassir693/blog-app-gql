const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Blog {
        _id:String!,
        TitleImage: String!,
        Title: String!,
        Introduction: String,
        TerminalCommands: [String]!,
        Code: [String]!,
        Peragraphs:[String]!,
        FinalLine: String,
        Views: Int,
        Likes:Int,
        LikeBy:[String]
        createdAt: String,
    },

    #Query   
    type Query {
        getAllBlogs:[Blog!]!
        getBlogById(id:String): Blog!
    },

    type Mutation {
        updateBlog(id:String,TitleImage: String, Title: String, Introduction: String, TerminalCommands: [String],Code: [String],Peragraphs:[String],FinalLine: String): Blog!
        AddBlog(TitleImage: String, Title: String, Introduction: String, TerminalCommands: [String],Code: [String],Peragraphs:[String],FinalLine: String): Blog!
        deleteBlog(id:String):Blog!
        addLike(id:String,readerId:String):Blog!
        removeLike(id:String,readerId:String):Blog!
        upgradeBlogTypeDefs: String
    }


`

module.exports = typeDefs