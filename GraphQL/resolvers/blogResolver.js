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
        },

        getLikedBlog: async(parent,args)=>{
            try {
                const {id} = args
                const resp = await Blog.find({LikeBy:{$in:id}})

                return resp
            } catch (error) {
                console.log('error: ',error);
            }
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
            console.log('Blog is now upd: ',args)
            const newBlog = new Blog(args)
            const resp = await newBlog.save()
            return resp
        },
        updateBlog:async(parent,args)=>{
            const reqId = args.id
            const {id,...other} = args
            console.log(other) 
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
        },
        addBlockIdAndCommentArrayToLastMigration: async()=>{
            try {
                const Array = await Blog.find()
                let newArray=[]
                Array.forEach(async (eachEle)=>{
                    // if(eachEle.Title=='GraphQL'){
                    //     eachEle.BlogId = 'GQL-1001'
                    // }else{
                    //     eachEle.BlogId = 'test-1001'
                    // }
                    // eachEle.Comments = []
                    eachEle.PublishDate = new Date(1656349220).toDateString() 

                    const resp = await Blog.findByIdAndUpdate(eachEle._id,{$set:eachEle},{new:true})
                    newArray.push(resp)
                })

                return newArray
            } catch (error) {
                console.log('error: ',error);
            }
        }
    }
}

module.exports = resolver