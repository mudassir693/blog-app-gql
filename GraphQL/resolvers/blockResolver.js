const Block = require('../../models/Block')

console.log('this is block resolver')

const resolver = {
    Query: {
        getAllBlocks: async(parent,args) => {
            const resp = await Block.find()
            return resp;
        },

        getBlockById: async(parent,args)=>{
            const {id} = args

            const resp = await Block.findById(id)
            return resp;
        }
    }, 
    Mutation: {
        addBlock: async(parent,args)=>{
            console.log('add block: ',args)
            const newBlock = new Block(args)

            const resp = await newBlock.save()
            return resp;
        },

        updBlock: async(parent,args)=>{
            const {id, ...others} = args

            const resp = await Block.findByIdAndUpdate(id,{$set:others},{new:true})

            return resp;
        },

        deleteBlock: async(parent,args)=>{
            const {id} = args
            const resp = await Block.findByIdAndDelete(id)

            return resp;
        }

    }
}

module.exports = resolver