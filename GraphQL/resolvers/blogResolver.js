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
        upgradeBlogTypeDefs:async()=>{
            const resp =await Blog.find()
            resp.forEach(async eachblog=>{
                eachblog.LikeBy=[]
                eachblog.Likes=0
                const resp2 = await Blog.findByIdAndUpdate(eachblog._id,{$set:eachblog},{new:true})
            })

            return 'Done'
        },
        removeLike:async (parent,args)=>{
            const {id,readerId} = args
            const resp = await Blog.findById(id)
            resp.Likes = resp.Likes-1
            console.log('here is keera: ',resp.LikeBy.filter(reader_Id=>reader_Id !== readerId));
            resp.LikeBy = resp.LikeBy.filter(reader_Id=>reader_Id !== readerId)
            const resp2 = await Blog.findByIdAndUpdate(id,{$set:resp},{new:true})
            return resp2
        },
        addLike:async(parent,args)=>{
            const {id,readerId} = args
            const resp = await Blog.findById(id)
            resp.Likes = resp.Likes+1
            resp.LikeBy.push(readerId)
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