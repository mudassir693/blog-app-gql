const { mergeTypeDefs } = require('@graphql-tools/merge')
const blogDefs = require('./blogtypeDef')
const readerDefs = require('./readertypeDef')
const blockDefs = require('./blocktypeDef')
// const { mergeTypeDefs } = require('graphql-tools-merge-typedefs');

// const productType = require('./productType')

const types = [readerDefs,blogDefs,blockDefs]

module.exports = mergeTypeDefs(types)