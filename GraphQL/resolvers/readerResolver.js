const Reader = require('../../models/Reader')
console.log('wwhat' )
const readerResolver = {
    Query:{
        getAllReaders:async()=>{
            const resp = await Reader.find()
            return resp
        },
        getReaderById:async(parent,args)=>{
            const {id} = args
            const resp = await Reader.findById(id)
            return resp
        }
    },
    Mutation: {
        AddAdmin:async(parent,args)=>{
            const respReader = await Reader.find()

            respReader.forEach(async eachReader=>{
                const resp = await Reader.findById(eachReader._id)
                if(resp.Email == 'mudassirsiddiqui27@gmail.com'){
                    resp.Admin = true
                    const updResp = await Reader.findByIdAndUpdate(resp._id,{$set:resp},{new:true})
                } else {
                    resp.Admin = false
                    const updResp = await Reader.findByIdAndUpdate(resp._id,{$set:resp},{new:true})
                }
            })

            return respReader
        },
        addReader:async(parent,args)=>{
            console.log(args);
            const readerPresent = await Reader.findOne({Email:args.Email})
            if(readerPresent){
                return readerPresent
            }
            else{
                const newReader = new Reader(args)
                const resp = await newReader.save()
                return resp
            }
        }
    }
} 

module.exports = readerResolver