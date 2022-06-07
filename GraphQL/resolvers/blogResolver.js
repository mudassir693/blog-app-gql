const Blog = require('../../models/Blog')

const resolver = {
    Query: {
        getAllBlogs:async()=>{
            const resp = await Blog.find()
            return resp
        },
        getBlogById:async(parent,args)=>{
            const resp = await Blog.findById(args.id)
            return resp
        }
    },
    Mutation: {
        AddBlog: async(parent,args)=>{
            console.log(args)
            const newBlog = new Blog(args)
            const resp = await newBlog.save()
            return resp
        },
        updateBlog:async(parent,args)=>{
            const reqId = args.id
            const {id,...other} = args 
            const resp = await Blog.findByIdAndUpdate(reqId,{$set:other},{new:true})

            return resp
        },
        deleteBlog: async(parent,args)=>{
            try {
                const resp = await Blog.findByIdAndDelete(args.id)
                return resp
            } catch (error) {
                return error
            }
        }
    }
}

module.exports = resolver