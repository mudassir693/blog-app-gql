const Blog = require('../../models/Blog')

const resolver = {
    Query: {
        getAllBlogs:async()=>{
            const resp = await Blog.find()

            return resp
        },
        getBlogById:async(parent,args)=>{

            const resp = await Blog.findById(args.id)
            if(resp.Views){

                resp.Views = resp.Views+1
            }else {
                resp.Views=1
            }
            if(!resp.Likes){
                resp.Likes = 0
            }
            
            const resp2 = await Blog.findByIdAndUpdate(args.id,{$set:resp},{new:true})
            return resp2
        }
    },
    Mutation: {
        addLike:async(parent,args)=>{
            const {id} = args
            const resp = await Blog.findById(id)
            resp.Likes = resp.Likes+1
            const resp2 = await Blog.findByIdAndUpdate(id,{$set:resp},{new:true})
            return resp2 
        },
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