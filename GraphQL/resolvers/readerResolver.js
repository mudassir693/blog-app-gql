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
        addReader:async(parent,args)=>{
            console.log(args);
            const newReader = new Reader(args)

            const resp = await newReader.save()
            return resp
        }
    }
} 

module.exports = readerResolver