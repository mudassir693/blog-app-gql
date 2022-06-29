const Comment = require('../../models/Comment')

const resolvers = {
    Query: {
        getAllComents: async()=>{
            const resp = await Comment.find()
            
            return resp 
        },

        getCommentById: async(parent,args)=>{
            const {id} = args
            const resp = await Comment.findById(id)
            return resp
        },
        getAllCommentFromEachBlog: async(parent,args)=>{
            try {
                const resp = await Comment.find({BlogId: args.id})
                return resp
            } catch (error) {
                console.log('error is : ', error)
            }
        }
    },
    Mutation: {
        addComment: async(parent,args)=>{
            console.log(args);
            const newComment = new Comment(args)

            const resp = await newComment.save()
            return resp;
        }
    }
}

module.exports = resolvers