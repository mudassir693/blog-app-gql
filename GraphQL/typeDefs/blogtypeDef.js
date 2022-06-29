const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Blog {
        _id:String!,
        BlogId:String,
        TitleImage: String!,
        Title: String!,
        Introduction: String!,
        Body: [String]
        FinalLine: String,
        Views: Int,
        Likes:Int,
        PublishDate: String,
        LikeBy:[String],
        Comments:[String]
        createdAt: String,
    },

    


    #Query   
    type Query {
        getAllBlogs:[Blog!]!
        getBlogById(id:String): Blog!
    },

    type Mutation {
        updateBlog(id:String,TitleImage: String, Title: String, Introduction: String, Body: [String], Comments:[String], FinalLine: String): Blog!
        AddBlog(TitleImage: String, BlogId:String, Title: String, Introduction: String, Body: [String], Comments:[String] ,FinalLine: String): Blog!
        deleteBlog(id:String):Blog!
        addLike(id:String,readerId:String):Blog!
        removeLike(id:String,readerId:String):Blog!
        upgradeBlogTypeDefs: String
        #migration
        addBlockIdAndCommentArrayToLastMigration: [Blog]
    }


`

module.exports = typeDefs